import { useEffect, useState } from 'react';
import AuthScreen from './components/AuthScreen';
import EnterpriseApp from './components/EnterpriseApp';

const SESSION_KEY = 'boq_session';

function readSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export default function App() {
  const [session, setSession] = useState(() => readSession());

  useEffect(() => {
    if (session) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      return;
    }

    localStorage.removeItem(SESSION_KEY);
  }, [session]);

  function handleAuthSuccess(user) {
    setSession({
      name: user.name,
      role: user.role,
      employeeId: user.employeeId,
      loggedInAt: Date.now(),
    });
  }

  function handleLogout() {
    setSession(null);
  }

  if (!session) {
    return <AuthScreen onAuthSuccess={handleAuthSuccess} />;
  }

  return <EnterpriseApp session={session} onLogout={handleLogout} />;
}
