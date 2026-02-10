package com.checkmate.backend.domain.analysis.processor.sales;

import com.checkmate.backend.domain.analysis.context.SalesAnalysisContext;
import com.checkmate.backend.domain.analysis.dto.response.sales.AverageOrderAmountResponse;
import com.checkmate.backend.domain.analysis.enums.AnalysisCardCode;
import com.checkmate.backend.domain.analysis.enums.AnalysisCode;
import com.checkmate.backend.domain.analysis.processor.AnalysisProcessor;
import com.checkmate.backend.domain.analysis.result.AnalysisResult;
import com.checkmate.backend.domain.analysis.result.DefaultAnalysisResult;
import com.checkmate.backend.domain.order.repository.SalesAnalysisRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

/** SLS_03 (건당 평균가) */
@Component
@RequiredArgsConstructor
@Slf4j
public class AverageOrderAmountProcessor implements AnalysisProcessor<SalesAnalysisContext> {
    private final SalesAnalysisRepository salesAnalysisRepository;

    @Override
    public boolean supports(AnalysisCardCode analysisCardCode) {
        return AnalysisCode.SLS_03 == analysisCardCode.getMetricCode();
    }

    @Override
    public AnalysisResult process(SalesAnalysisContext context) {

        long currentNetAmount =
                Optional.ofNullable(
                                salesAnalysisRepository.findTotalNetAmount(
                                        context.getStoreId(),
                                        context.getStartDate(),
                                        context.getEndDate()))
                        .orElse(0L);

        long currentOrderCount =
                Optional.ofNullable(
                                salesAnalysisRepository.countOrders(
                                        context.getStoreId(),
                                        context.getStartDate(),
                                        context.getEndDate()))
                        .orElse(0L);

        long comparisonNetAmount =
                Optional.ofNullable(
                                salesAnalysisRepository.findTotalNetAmount(
                                        context.getStoreId(),
                                        context.getComparisonStart(),
                                        context.getComparisonEnd()))
                        .orElse(0L);

        long comparisonOrderCount =
                Optional.ofNullable(
                                salesAnalysisRepository.countOrders(
                                        context.getStoreId(),
                                        context.getComparisonStart(),
                                        context.getComparisonEnd()))
                        .orElse(0L);

        long currentAverage = currentOrderCount == 0 ? 0 : currentNetAmount / currentOrderCount;

        long comparisonAverage =
                comparisonOrderCount == 0 ? 0 : comparisonNetAmount / comparisonOrderCount;

        long difference = currentAverage - comparisonAverage;

        AverageOrderAmountResponse response =
                new AverageOrderAmountResponse(currentAverage, difference);

        return new DefaultAnalysisResult<>(context.getAnalysisCardCode(), response);
    }
}
