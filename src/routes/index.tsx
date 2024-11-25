import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/layouts/root-layout'

// Lazy load các pages
// const pages = ['farm', 'lend', 'stake', 'bridge', 'docs', 'analytics', 'not-found']
// const [FarmPage, LendPage, StakePage, BridgePage, DocsPage, AnalyticsPage, NotFoundPage] = pages.map(page => lazy(() => import(`@/pages/${page}`)))
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
