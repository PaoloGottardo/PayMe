'use client';

import { usePrivy, useWallets } from "@privy-io/react-auth";

export default function Page() {
  const { ready, authenticated, login, logout } = usePrivy();
  const { wallets } = useWallets();
  const walletAddress = wallets[0]?.address;

  return (
    <div className="mx-auto mt-24 flex max-w-xl flex-col items-center gap-4 px-4 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight">PayMe</h1>

      {!ready ? (
        <p className="text-sm text-gray-400">Caricamento wallet...</p>
      ) : null}

      {!authenticated ? (
        <button
          onClick={login}
          disabled={!ready}
          className="rounded-lg bg-[#676FFF] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Connetti Wallet (MetaMask o Phantom)
        </button>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-gray-300">
            Connesso come:{" "}
            <span className="font-mono text-white">
              {walletAddress ?? "Wallet non trovata"}
            </span>
          </p>
          <button
            onClick={logout}
            className="rounded-lg border border-gray-600 px-4 py-2 text-sm text-white transition hover:bg-gray-800"
          >
            Disconnetti
          </button>
        </div>
      )}
    </div>
  );
}