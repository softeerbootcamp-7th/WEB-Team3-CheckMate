package com.checkmate.backend.domain.analysis.dto.response.sales;

import com.checkmate.backend.domain.analysis.dto.response.DashboardAnalysisResponse;
import java.util.List;

/** 대시보드 SLS_08_01 (오늘 결제수단별 매출) */
public record DashboardTodaySalesByPayMethodResponse(
        SalesInsight insight, List<SalesByPayMethodItem> items // 결제수단별 유형별 상세 리스트
        ) implements DashboardAnalysisResponse {}
