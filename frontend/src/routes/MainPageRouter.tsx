import { Navigate, type RouteObject } from 'react-router-dom';

import { MainLayout } from '@/components/shared';
import { DailyReportPage } from '@/pages/daily-report-page';
import { DashboardPage } from '@/pages/dashboard-page';
import { MenuPage } from '@/pages/menu-page';
import { SalesPage } from '@/pages/sales-page';
import { SettingPage } from '@/pages/setting-page';
import { WeatherPage } from '@/pages/weather-page';

export const mainPageRoutes: RouteObject = {
  Component: MainLayout,
  children: [
    { index: true, element: <Navigate to="dashboard" replace /> },
    { path: 'dashboard', Component: DashboardPage },
    {
      path: 'analysis',
      children: [
        {
          index: true,
          element: <Navigate to="sales" replace />,
        },
        { path: 'sales', Component: SalesPage },
        { path: 'menu', Component: MenuPage },
        { path: 'weather', Component: WeatherPage },
      ],
    },
    { path: 'daily-report', Component: DailyReportPage },
    { path: 'settings', Component: SettingPage },
  ],
};
