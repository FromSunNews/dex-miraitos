import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { RootLayout } from '@/layouts/root-layout'

// Lazy load with pages
const FarmPage = lazy(() => import('@/pages/farm'))
const LendPage = lazy(() => import('@/pages/lend'))
const StakePage = lazy(() => import('@/pages/stake'))
const BridgePage = lazy(() => import('@/pages/bridge'))
const DocsPage = lazy(() => import('@/pages/docs'))
const AnalyticsPage = lazy(() => import('@/pages/analytics'))
const NotFoundPage = lazy(() => import('@/pages/not-found'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/farm" replace />
      },
      {
        path: 'farm',
        element: <FarmPage />,
      },
      {
        path: 'lend',
        element: <LendPage />,
      },
      {
        path: 'stake',
        element: <StakePage />,
      },
      {
        path: 'bridge',
        element: <BridgePage />,
      },
      {
        path: 'docs',
        element: <DocsPage />,
      },
      {
        path: 'analytics',
        element: <AnalyticsPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
