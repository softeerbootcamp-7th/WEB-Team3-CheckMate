import { Navigate, Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/components/shared';
import { DailyReportPage } from '@/pages/daily-report-page';
import { DashboardPage } from '@/pages/dashboard-page';
import { MenuPage } from '@/pages/menu-page';
import { SalesPage } from '@/pages/sales-page';
import { SettingPage } from '@/pages/setting-page';
import { WeatherPage } from '@/pages/weather-page';

export const MainPageRouter = () => {
  return (
    <Routes>
      {/* MainLayout은 사이드바 + 우측영역 으로 이루어진 레이아웃 */}
      <Route element={<MainLayout />}>
        {/* 기본 url로 들어가면 대시보드 페이지로 리다이렉트 된다  */}
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="analysis">
          {/* /analysis 로 들어오면 analysis/sales로 바로 리다이렉트 */}
          <Route index element={<Navigate to="sales" replace />} />
          <Route path="sales" element={<SalesPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="weather" element={<WeatherPage />} />
        </Route>
        <Route path="daily-report" element={<DailyReportPage />} />
        <Route path="settings" element={<SettingPage />} />
      </Route>
      <Route path="*" element={<div>없는페이지</div>} />
    </Routes>
  );
};
