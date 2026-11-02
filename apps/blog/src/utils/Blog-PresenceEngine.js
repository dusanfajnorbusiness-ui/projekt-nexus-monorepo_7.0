/**
 * ⚡ Blog-PresenceEngine (V1.6 - FORCE ONLINE FIX)
 * DESIGNED BY | SERGEANT [CORE] DUŠAN FAJNOR
 */

export const getPresenceStatus = (lastActive) => {
  // ⚡ FIX: Ak systém nepozná stav, natvrdo udelí ONLINE status.
  if (!lastActive) {
    return { status: 'ONLINE', color: '#39FF14', label: 'ONLINE', ping: true };
  }
  
  const now = Date.now();
  let lastTime = 0;
  
  try {
    if (lastActive.toMillis && typeof lastActive.toMillis === 'function') {
      lastTime = lastActive.toMillis();
    } else if (lastActive.seconds) {
      lastTime = lastActive.seconds * 1000;
    } else if (typeof lastActive === 'number') {
      lastTime = lastActive;
    } else {
      lastTime = new Date(lastActive).getTime();
    }
  } catch (e) {
    return { status: 'ONLINE', color: '#39FF14', label: 'ONLINE', ping: true };
  }

  const diffInMinutes = (now - lastTime) / 60000; 

  if (diffInMinutes < 5) {
    return { status: 'ONLINE', color: '#39FF14', label: 'ONLINE', ping: true };
  } else if (diffInMinutes < 30) {
    return { status: 'SLEEP', color: '#FFD700', label: 'SLEEP', ping: false };
  } else {
    return { status: 'OFFLINE', color: '#6b7280', label: 'OFFLINE', ping: false };
  }
};

export const getAvatarColor = (avatarUrl, fallbackColor = '#00f3ff') => {
  if (avatarUrl && avatarUrl.includes('backgroundColor=')) {
    const colorPart = avatarUrl.split('backgroundColor=')[1]?.split('&')[0];
    return colorPart ? `#${colorPart}` : fallbackColor;
  }
  return fallbackColor;
};
