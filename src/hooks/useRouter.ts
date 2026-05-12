import { useState, useEffect, useCallback } from 'react';

export type Route = 'home' | 'checkout' | 'confirmation';

export function useRouter() {
  const [route, setRoute] = useState<Route>(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'checkout') return 'checkout';
    if (hash === 'confirmation') return 'confirmation';
    return 'home';
  });

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'checkout') setRoute('checkout');
      else if (hash === 'confirmation') setRoute('confirmation');
      else setRoute('home');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((r: Route) => {
    window.location.hash = r === 'home' ? '' : r;
    setRoute(r);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { route, navigate };
}
