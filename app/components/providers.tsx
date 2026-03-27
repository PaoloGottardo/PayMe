'use client';

import { PrivyProvider } from "@privy-io/react-auth";
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana";
import type { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <PrivyProvider
      appId="cmn93ghfx01pa0cl1ii4d643c" // Inserirai il tuo ID tra un attimo
      config={{
        // Abilitiamo sia i wallet Ethereum che Solana
        appearance: {
          theme: 'dark',
          accentColor: '#676FFF',
          showWalletLoginFirst: true,
        },
        // Configurazione per far apparire i wallet su mobile
        externalWallets: {
          solana: {
            connectors: toSolanaWalletConnectors(),
          },
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}