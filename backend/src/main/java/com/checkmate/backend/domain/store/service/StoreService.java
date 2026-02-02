package com.checkmate.backend.domain.store.service;

import static com.checkmate.backend.global.response.ErrorStatus.MEMBER_NOT_FOUND_EXCEPTION;
import static com.checkmate.backend.global.response.ErrorStatus.SSE_CONNECTION_REQUIRED;

import com.checkmate.backend.domain.member.entity.Member;
import com.checkmate.backend.domain.member.repository.MemberRepository;
import com.checkmate.backend.domain.store.dto.request.StoreCreateRequestDTO;
import com.checkmate.backend.domain.store.entity.BusinessHour;
import com.checkmate.backend.domain.store.entity.Store;
import com.checkmate.backend.domain.store.repository.BusinessHourRepository;
import com.checkmate.backend.domain.store.repository.StoreRepository;
import com.checkmate.backend.global.exception.BadRequestException;
import com.checkmate.backend.global.exception.NotFoundException;
import com.checkmate.backend.global.sse.SseEmitterManager;
import com.checkmate.backend.global.util.BusinessJwtUtil;
import jakarta.transaction.Transactional;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@Service
@RequiredArgsConstructor
@Slf4j
public class StoreService {
    private final StoreRepository storeRepository;
    private final MemberRepository memberRepository;
    private final BusinessHourRepository businessHourRepository;
    private final BusinessJwtUtil businessJwtUtil;
    private final SseEmitterManager sseEmitterManager;

    /*
     * c
     * */

    @Transactional
    public Long create(Long memberId, StoreCreateRequestDTO storeCreateRequestDTO) {
        Member member =
                memberRepository
                        .findById(memberId)
                        .orElseThrow(
                                () -> {
                                    log.warn(
                                            "[create][member is not found][memberId= {}]",
                                            memberId);
                                    return new NotFoundException(MEMBER_NOT_FOUND_EXCEPTION);
                                });

        String businessAuthToken = storeCreateRequestDTO.businessAuthToken();

        businessJwtUtil.validateBusinessAuthToken(businessAuthToken);

        String businessRegistrationNumber =
                businessJwtUtil.getBusinessRegistrationNumberFromToken(businessAuthToken);

        // 매장
        Store store =
                Store.builder()
                        .businessRegistrationNumber(businessRegistrationNumber)
                        .storeName(storeCreateRequestDTO.storeName())
                        .zipcode(storeCreateRequestDTO.zipcode())
                        .address1(storeCreateRequestDTO.address1())
                        .address2(storeCreateRequestDTO.address2())
                        .salesClosingHour(storeCreateRequestDTO.salesClosingHour())
                        .member(member)
                        .build();

        Long storeId = storeRepository.save(store).getId();

        // 매장시간
        Optional.ofNullable(storeCreateRequestDTO.businessHours())
                .ifPresent(
                        businessHours -> {
                            List<BusinessHour> hours =
                                    businessHours.stream()
                                            .map(
                                                    businessHour ->
                                                            BusinessHour.builder() // 엔티티 변환
                                                                    .day(
                                                                            businessHour
                                                                                    .dayOfWeek()
                                                                                    .getKorean())
                                                                    .openTime(
                                                                            businessHour.openTime())
                                                                    .closeTime(
                                                                            businessHour
                                                                                    .closeTime())
                                                                    .closed(businessHour.closed())
                                                                    .store(store)
                                                                    .build())
                                            .toList();

                            businessHourRepository.saveAll(hours);
                        });

        return storeId;
    }

    /** 포스 연동 */
    public void connectPOS(Long storeId) {
        SseEmitter emitter = sseEmitterManager.getEmitter(storeId);

        if (emitter == null) {
            log.warn("[connectPOS][SSE 연동 안 했는데 포스 연동 시도함][storeId= {}]", storeId);
            throw new BadRequestException(SSE_CONNECTION_REQUIRED);
        }

        CompletableFuture.runAsync(
                () -> {
                    Random random = new Random();
                    try {
                        // 5 ~ 10초 랜덤 대기
                        int waitSeconds = 5 + random.nextInt(6);
                        TimeUnit.SECONDS.sleep(waitSeconds);

                        // 0.5 확률로 성공 또는 실패
                        boolean success = random.nextBoolean();

                        if (success) {
                            emitter.send("success");

                        } else {
                            emitter.send("fail");
                        }
                    } catch (InterruptedException | IOException e) {
                        log.warn("[connectPOS][storeId= {}, reason= {}]", storeId, e.getMessage());
                    }
                });
    }
}
