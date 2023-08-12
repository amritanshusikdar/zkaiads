import "@rainbow-me/rainbowkit/styles.css"

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { polygonMumbai, polygonZkEvm } from "wagmi/chains"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

const { chains, publicClient } = configureChains(
  [polygonMumbai, polygonZkEvm],
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_API! }),
    publicProvider(),
  ]
)

const { connectors } = getDefaultWallets({
  appName: "zk AI Ads",
  projectId: import.meta.env.VITE_WALLETCONNECT_API!,
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

const Wallet = ({ children }: any) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  )
}

export default Wallet
