'use client';

import {usePrivy} from '@privy-io/react-auth';

export default function Page() {
  const {login, authenticated, logout, user} = usePrivy();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
      {!authenticated ? (
        <button 
          onClick={login}
          style={{ padding: '12px 24px', backgroundColor: '#676FFF', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '16px' }}
        >
          Connetti Wallet (MetaMask o Phantom)
        </button>
      ) : (
        <div>
          <p>Connesso come: {user?.wallet?.address}</p>
          <button onClick={logout} style={{ marginTop: '10px' }}>Disconnetti</button>
        </div>
      )}
    </div>
  );
}