import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const ReportPage = lazy(() => import('src/pages/report'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const OtpPage = lazy(() => import('src/pages/otp'));
export const PredictPage = lazy(() => import('src/pages/predict'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const BotPage = lazy(() => import('src/pages/bot'));
export const SearchUsers = lazy(()=> import('src/pages/searchpage'));
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      index: true,
      path: '/',
      element: <LoginPage />,
    },
    {
      index: true,
      path: '/verification',
      element: <OtpPage />,
    },
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { path: '/dashboard', element: <IndexPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'predict/:uuid', element: <PredictPage /> },
        { path: 'report', element: <ReportPage /> },
        { path: 'bot', element: <BotPage /> },
        {path: 'predict/search', element: <SearchUsers/>},
      ],
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
