
import {
  AptosWalletAdapterProvider,
  NetworkName,
} from "@aptos-labs/wallet-adapter-react";
import { BitgetWallet } from "@bitget-wallet/aptos-wallet-adapter";
import { BloctoWallet } from "@blocto/aptos-wallet-adapter-plugin";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
import { PontemWallet } from "@pontem/wallet-adapter-plugin";
import { RiseWallet } from "@rise-wallet/wallet-adapter";
import { TokenPocketWallet } from "@tp-lab/aptos-wallet-adapter";
import { TrustWallet } from "@trustwallet/aptos-wallet-adapter";
import { WelldoneWallet } from "@welldone-studio/aptos-wallet-adapter";
import { MSafeWalletAdapter } from "@msafe/aptos-wallet-adapter";
import { OKXWallet } from "@okwallet/aptos-wallet-adapter";
import { PropsWithChildren, useMemo } from "react";
import { Network } from "@aptos-labs/ts-sdk";
import { useToast } from "@/hooks/use-toast";
import { useAutoConnect } from "./AutoConnectProvider";

const AptosConnectId = "99d260d0-c69d-4c15-965f-f6f9b7b00102";

// Statically initialize wallets that don't change for the network
const martianWallet = new MartianWallet();
const msafeWallet = new MSafeWalletAdapter();
const okxWallet = new OKXWallet();
const pontemWallet = new PontemWallet();
const riseWallet = new RiseWallet();
const tokenPocketWallet = new TokenPocketWallet();
const trustWallet = new TrustWallet();
const welldoneWallet = new WelldoneWallet();
const bitgetWallet = new BitgetWallet();

export function WalletProvider({ children }: PropsWithChildren) {
  const { autoConnect } = useAutoConnect();
  const { toast } = useToast();

  const wallets = useMemo(
    () => [
      okxWallet,
      martianWallet,
      pontemWallet,
      bitgetWallet,
      // Blocto supports Testnet/Mainnet for now.
      new BloctoWallet({
        network: NetworkName.Testnet,
        bloctoAppId: "6d85f56e-5f2e-46cd-b5f2-5cf9695b4d46",
      }),
      riseWallet,
      msafeWallet,
      tokenPocketWallet,
      trustWallet,
      welldoneWallet,
    ],
    [],
  );

  return (
    <AptosWalletAdapterProvider
      plugins={wallets}
      autoConnect={autoConnect}
      dappConfig={{
        aptosConnectDappId: AptosConnectId,
        network: Network.TESTNET,
      }}
      onError={(error) => {
        toast({
          variant: "destructive",
          title: "Error",
          description: error || "Unknown wallet error",
        });
      }}
    >
      {children}
    </AptosWalletAdapterProvider>
  );
}