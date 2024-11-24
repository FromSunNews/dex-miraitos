import '@/App.css'
import {
  ReactQueryClientProvider,
  WalletProvider,
  Dashboard,
  AutoConnectProvider,
} from '@/providers'
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <AutoConnectProvider>
      <ReactQueryClientProvider>
        <WalletProvider>
          {/* Router sth */}
          <Dashboard />
          <Toaster />
        </WalletProvider>
      </ReactQueryClientProvider>
    </AutoConnectProvider>
  )
}

export default App
