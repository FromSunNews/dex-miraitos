import { MultiAgent, SingleSigner, Sponsor, TransactionParameters } from "@/components/features/transaction-flows";
import { WalletConnection } from "@/components/features/wallet-connection";
import { Alert, AlertDescription, AlertTitle } from "@/components/shared/ui/alert";
import { isMainnet } from "@/utils";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { AlertCircle } from "lucide-react";

export default function FarmPage() {
  const { account, connected, network, wallet, changeNetwork } = useWallet();
  return (
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
  )
}