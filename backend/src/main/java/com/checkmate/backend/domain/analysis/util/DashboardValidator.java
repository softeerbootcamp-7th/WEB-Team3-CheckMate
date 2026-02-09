package com.checkmate.backend.domain.analysis.util;

import com.checkmate.backend.domain.analysis.entity.Dashboard;
import com.checkmate.backend.domain.analysis.repository.DashboardRepository;
import com.checkmate.backend.global.exception.ForbiddenException;
import com.checkmate.backend.global.exception.NotFoundException;
import com.checkmate.backend.global.response.ErrorStatus;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class DashboardValidator {

    private final DashboardRepository dashboardRepository;

    public Dashboard validateDashboardAccess(Long storeId, Long dashboardId) {
        Dashboard dashboard = dashboardRepository.findById(dashboardId)
                .orElseThrow(() -> new NotFoundException(ErrorStatus.DASHBOARD_NOT_FOUND));

        if (!dashboard.getStore().getId().equals(storeId)) {
            log.warn("Unauthorized dashboard access: storeId {} tried to access dashboardId {}",
                    storeId, dashboardId);
            throw new ForbiddenException(ErrorStatus.DASHBOARD_ACCESS_DENIED);
        }

        return dashboard;
    }
}