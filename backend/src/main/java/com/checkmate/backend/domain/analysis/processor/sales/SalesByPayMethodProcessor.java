package com.checkmate.backend.domain.analysis.processor.sales;

import com.checkmate.backend.domain.analysis.context.SalesAnalysisContext;
import com.checkmate.backend.domain.analysis.dto.projection.sales.SalesByPayMethodProjection;
import com.checkmate.backend.domain.analysis.dto.response.AnalysisResponse;
import com.checkmate.backend.domain.analysis.dto.response.sales.SalesByPayMethodItem;
import com.checkmate.backend.domain.analysis.dto.response.sales.SalesByPayMethodResponse;
import com.checkmate.backend.domain.analysis.enums.AnalysisCardCode;
import com.checkmate.backend.domain.analysis.processor.AnalysisProcessor;
import com.checkmate.backend.domain.order.repository.SalesAnalysisRepository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

/** SLS_08_02, SLS_08_03 (이번주, 이번달 결제수단별 매출) */
@Component
@RequiredArgsConstructor
@Slf4j
public class SalesByPayMethodProcessor implements AnalysisProcessor<SalesAnalysisContext> {
    private final SalesAnalysisRepository salesAnalysisRepository;

    @Override
    public boolean supports(AnalysisCardCode analysisCardCode) {
        return AnalysisCardCode.SLS_08_02 == analysisCardCode
                || AnalysisCardCode.SLS_08_03 == analysisCardCode;
    }

    @Override
    public AnalysisResponse process(SalesAnalysisContext context) {

        // 현재 기간 조회
        List<SalesByPayMethodProjection> currentProjections =
                salesAnalysisRepository.findSalesByPaymentMethod(
                        context.getStoreId(), context.getStartDate(), context.getEndDate());

        long currentTotalNetAmount = totalNetAmount(currentProjections);

        // Map<PayMethod, Share> 생성
        Map<String, Double> currentShareMap = new HashMap<>();

        for (SalesByPayMethodProjection item : currentProjections) {
            double share =
                    currentTotalNetAmount == 0
                            ? 0.0
                            : (item.netAmount() * 100.0) / currentTotalNetAmount;
            currentShareMap.put(item.payMethod(), share);
        }

        // 주문수단별 리스트
        List<SalesByPayMethodItem> items =
                currentProjections.stream()
                        .map(
                                item -> {
                                    double currentShare = currentShareMap.get(item.payMethod());

                                    return new SalesByPayMethodItem(
                                            item.payMethod(),
                                            item.netAmount(),
                                            item.orderCount(),
                                            round(currentShare),
                                            0.0);
                                })
                        .toList();

        SalesByPayMethodResponse response = new SalesByPayMethodResponse(items);

        return new AnalysisResponse(context.getAnalysisCardCode(), response, response);
    }

    private long totalNetAmount(List<SalesByPayMethodProjection> list) {
        return list.stream().mapToLong(SalesByPayMethodProjection::netAmount).sum();
    }

    /** 소수점 1자리까지 반올림 */
    private double round(double value) {
        return Math.round(value * 10) / 10.0;
    }
}
