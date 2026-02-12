package com.checkmate.backend.domain.analysis.processor.sales;

import com.checkmate.backend.domain.analysis.context.SalesAnalysisContext;
import com.checkmate.backend.domain.analysis.dto.SalesByType;
import com.checkmate.backend.domain.analysis.dto.projection.sales.SalesByTypeProjection;
import com.checkmate.backend.domain.analysis.dto.response.AnalysisResponse;
import com.checkmate.backend.domain.analysis.dto.response.sales.SalesByTypeItem;
import com.checkmate.backend.domain.analysis.dto.response.sales.SalesByTypeResponse;
import com.checkmate.backend.domain.analysis.enums.AnalysisCardCode;
import com.checkmate.backend.domain.analysis.processor.AnalysisProcessor;
import com.checkmate.backend.domain.order.enums.SalesType;
import com.checkmate.backend.domain.order.repository.SalesAnalysisRepository;
import java.util.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

/** SLS_06_02, SLS_06_03 (이번주, 이번달 판매유형별 매출) */
@Component
@RequiredArgsConstructor
@Slf4j
public class SalesByTypeProcessor implements AnalysisProcessor<SalesAnalysisContext> {
    private final SalesAnalysisRepository salesAnalysisRepository;

    @Override
    public boolean supports(AnalysisCardCode analysisCardCode) {
        return AnalysisCardCode.SLS_06_02 == analysisCardCode
                || AnalysisCardCode.SLS_06_03 == analysisCardCode;
    }

    @Override
    public AnalysisResponse process(SalesAnalysisContext context) {

        // 현재 기간 조회
        List<SalesByTypeProjection> currentProjections =
                salesAnalysisRepository.findSalesBySalesType(
                        context.getStoreId(), context.getStartDate(), context.getEndDate());

        List<SalesByType> current = toItemList(currentProjections);

        long currentTotalNetAmount = totalNetAmount(current);

        // Map<SalesType, Share> 생성
        Map<SalesType, Double> currentShareMap = new EnumMap<>(SalesType.class);

        for (SalesByType item : current) {
            double share =
                    currentTotalNetAmount == 0
                            ? 0.0
                            : (item.netAmount() * 100.0) / currentTotalNetAmount;
            currentShareMap.put(item.salesType(), share);
        }

        // 판매 유형별 리스트
        List<SalesByTypeItem> items =
                current.stream()
                        .map(
                                item -> {
                                    double currentShare = currentShareMap.get(item.salesType());

                                    return new SalesByTypeItem(
                                            item.salesType(),
                                            item.netAmount(),
                                            item.orderCount(),
                                            round(currentShare),
                                            0.0);
                                })
                        .toList();

        SalesByTypeResponse response = new SalesByTypeResponse(items);

        return new AnalysisResponse(context.getAnalysisCardCode(), response, response);
    }

    private List<SalesByType> toItemList(List<SalesByTypeProjection> projections) {

        List<SalesByType> result = new ArrayList<>();

        for (SalesByTypeProjection p : projections) {

            SalesType salesType = SalesType.fromValue(p.salesType());

            if (salesType == null) {
                log.warn("[TodaySalesByTypeProcessor] Unknown salesType = {}", p.salesType());
                continue;
            }

            long amount = Optional.ofNullable(p.netAmount()).orElse(0L);
            long count = Optional.ofNullable(p.orderCount()).orElse(0L);

            result.add(new SalesByType(salesType, amount, count));
        }

        return result;
    }

    private long totalNetAmount(List<SalesByType> list) {
        return list.stream().mapToLong(SalesByType::netAmount).sum();
    }

    /** 소수점 1자리까지 반올림 */
    private double round(double value) {
        return Math.round(value * 10) / 10.0;
    }
}
