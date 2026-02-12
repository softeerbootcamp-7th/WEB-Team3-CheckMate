package com.checkmate.backend.domain.analysis.processor.sales;

import com.checkmate.backend.domain.analysis.context.SalesAnalysisContext;
import com.checkmate.backend.domain.analysis.dto.projection.sales.SalesByTypeProjection;
import com.checkmate.backend.domain.analysis.dto.response.AnalysisResponse;
import com.checkmate.backend.domain.analysis.dto.response.sales.SalesByTypeItem;
import com.checkmate.backend.domain.analysis.dto.response.sales.SalesByTypeResponse;
import com.checkmate.backend.domain.analysis.enums.AnalysisCardCode;
import com.checkmate.backend.domain.analysis.processor.AnalysisProcessor;
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

        long currentTotalNetAmount = totalNetAmount(currentProjections);

        // Map<SalesType, Share> 생성
        Map<String, Double> currentShareMap = new HashMap<>();

        for (SalesByTypeProjection item : currentProjections) {
            double share =
                    currentTotalNetAmount == 0
                            ? 0.0
                            : (item.netAmount() * 100.0) / currentTotalNetAmount;
            currentShareMap.put(item.salesType(), share);
        }

        // 판매 유형별 리스트
        List<SalesByTypeItem> items =
                currentProjections.stream()
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

    private long totalNetAmount(List<SalesByTypeProjection> list) {
        return list.stream().mapToLong(SalesByTypeProjection::netAmount).sum();
    }

    /** 소수점 1자리까지 반올림 */
    private double round(double value) {
        return Math.round(value * 10) / 10.0;
    }
}
