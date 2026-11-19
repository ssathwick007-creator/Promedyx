import { useState, useEffect } from 'react';

/**
 * PulseGuard Foundational System Health Hook
 * Tracks browser connection status, runtime uptime and heartbeat synchronization.
 */
export function useSystemHealth() {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );
  const [mountedAt] = useState(() => Date.now());
  const [uptimeSeconds, setUptimeSeconds] = useState(0);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const timer = setInterval(() => {
      setUptimeSeconds(Math.floor((Date.now() - mountedAt) / 1000));
    }, 1000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(timer);
    };
  }, [mountedAt]);

  return {
    isOnline,
    uptimeSeconds,
    status: isOnline ? 'stable' : 'offline',
  };
}

export default useSystemHealth;

