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
    <ThemeProvider>
      <AutoConnectProvider>
        <ReactQueryClientProvider>
          <WalletProvider>
            <ErrorBoundary>
              <RouterProvider router={router} />
            </ErrorBoundary>
            <Toaster />
          </WalletProvider>
        </ReactQueryClientProvider>
      </AutoConnectProvider>
    </ThemeProvider>
  )
}

export default App
