package com.checkmate.backend.domain.analysis.processor.sales;

import com.checkmate.backend.domain.analysis.context.SalesAnalysisContext;
import com.checkmate.backend.domain.analysis.dto.projection.sales.SalesTrendProjection;
import com.checkmate.backend.domain.analysis.dto.response.AnalysisResponse;
import com.checkmate.backend.domain.analysis.dto.response.sales.SalesTrendResponse;
import com.checkmate.backend.domain.analysis.enums.AnalysisCardCode;
import com.checkmate.backend.domain.analysis.processor.AnalysisProcessor;
import com.checkmate.backend.domain.order.repository.SalesAnalysisRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

/** SLS_09_04 (일별 매출 추이) SLS_10_07 (주별 매출 추이) SLS_11_07 (월별 매출 추이) SLS_12_01 (연별 매출 추이) */
@Component
@RequiredArgsConstructor
@Slf4j
public class SalesTrendProcessor implements AnalysisProcessor<SalesAnalysisContext> {
    private final SalesAnalysisRepository salesAnalysisRepository;

    @Override
    public boolean supports(AnalysisCardCode analysisCardCode) {
        return AnalysisCardCode.SLS_09_04 == analysisCardCode
                || AnalysisCardCode.SLS_10_07 == analysisCardCode
                || AnalysisCardCode.SLS_11_07 == analysisCardCode
                || AnalysisCardCode.SLS_12_01 == analysisCardCode;
    }

    @Override
    public AnalysisResponse process(SalesAnalysisContext context) {

        Optional<SalesTrendProjection> salesTrendProjection =
                salesAnalysisRepository.findSalesTrend(
                        context.getStoreId(), context.getStartDate(), context.getEndDate());

        SalesTrendResponse response =
                salesTrendProjection
                        .map(
                                p ->
                                        new SalesTrendResponse(
                                                Optional.ofNullable(p.netAmount()).orElse(0L),
                                                Optional.ofNullable(p.orderCount()).orElse(0L)))
                        .orElse(new SalesTrendResponse(0L, 0L));

        return new AnalysisResponse(context.getAnalysisCardCode(), response, response);
    }
}
