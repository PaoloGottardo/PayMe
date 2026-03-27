"use client";
import { useWalletConnection } from "@solana/react-hooks";



export default function Home() {
  const { connectors, connect, disconnect, wallet, status } = useWalletConnection();

  const connected = status === "connected";
  const connecting = status === "connecting";
  const activeConnectorId = wallet?.connector.id;
  const address = wallet?.account?.address?.toString();

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
      {/* Connect / Disconnect Button in upper right */}
      <div className="absolute right-4 top-4 z-20 flex flex-col items-end gap-2">
        {!connected ? (
          <div className="flex flex-col gap-2">
            {connectors.map((connector) => (
              <button
                key={connector.id}
                onClick={() => connect(connector.id)}
                disabled={connecting}
                className="px-4 py-2 rounded-full bg-white text-black font-semibold shadow-md text-sm transition hover:bg-gray-200 disabled:bg-gray-500 disabled:text-white w-max"
              >
                {connecting && activeConnectorId === connector.id
                  ? "Connecting…"
                  : `Connetti ${connector.name}`}
              </button>
            ))}
          </div>
        ) : (
          <button
            onClick={disconnect}
            className="px-4 py-2 rounded-full bg-gray-800 text-white font-semibold shadow-md text-sm transition hover:bg-gray-700 w-max"
          >
            Disconnetti
          </button>
        )}
      </div>

      <header className="pt-12 pb-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">PayMe</h1>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center">
        <button
          className="w-64 py-6 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-500 text-white text-2xl font-bold shadow-xl active:scale-95 transition-all duration-100"
          disabled={!connected}
        >
          Invia SOL
        </button>
        {/* Optional: Show address if connected */}
        {connected && address && (
          <div className="mt-6 text-xs bg-gray-900/80 px-4 py-2 rounded-lg max-w-xs break-all text-center font-mono border border-gray-700">
            {address}
          </div>
        )}
      </main>
    </div>
  );
}
