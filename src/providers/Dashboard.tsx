import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { WalletSelector } from "@/components/WalletSelector"
import { WalletConnection } from "@/components/WalletConnection"
import { useWallet } from "@aptos-labs/wallet-adapter-react"
import { isMainnet } from "@/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { AlertCircle } from "lucide-react";
import { TransactionParameters, SingleSigner, Sponsor, MultiAgent } from "@/components/transactionFlows"

export function Dashboard() {
  const { account, connected, network, wallet, changeNetwork } = useWallet();
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex flex-row justify-between h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-2 px-4">
            <WalletSelector />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {connected ? (
            <WalletConnection
              account={account}
              network={network}
              wallet={wallet}
              changeNetwork={changeNetwork}
            />
          ) : (
            <div>
              <p>No wallet connected</p>
            </div>
          )}

          {connected && isMainnet(connected, network?.name) && (
            <Alert variant="warning">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                The transactions flows below will not work on the Mainnet network.
              </AlertDescription>
            </Alert>
          )}
          {connected && (
            <>
              <TransactionParameters />
              <SingleSigner />
              <Sponsor />
              <MultiAgent />
            </>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
