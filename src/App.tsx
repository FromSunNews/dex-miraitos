import '@/App.css'
import {
  ReactQueryClientProvider,
  WalletProvider,
  AutoConnectProvider,
} from '@/providers'
import { Toaster } from "@/components/shared/ui/toaster";
import { ErrorBoundary } from '@/components/features/error-boundary';
import { ThemeProvider } from '@/context/theme';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AutoConnectProvider>
          <ReactQueryClientProvider>
            <WalletProvider>
              <RouterProvider router={router} />
              <Toaster />
            </WalletProvider>
          </ReactQueryClientProvider>
        </AutoConnectProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
