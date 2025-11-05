import { useEffect, useState } from 'react';
import { api } from '../services/api.js';

export default function DashboardUser() {
  const [health, setHealth] = useState(null);
  useEffect(() => {
    api.get('/health').then((r) => setHealth(r.data.status)).catch(() => setHealth('error'));
  }, []);
  return (
    <div>
      <h1>User Dashboard</h1>
      <p>API health: {health || '...'}</p>
    </div>
  );
}


