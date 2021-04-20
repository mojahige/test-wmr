import hydrate from 'preact-iso/hydrate';
import { LocationProvider, Router } from 'preact-iso/router';
import lazy, { ErrorBoundary } from 'preact-iso/lazy';
import Home from './pages/home/index.js';
import NotFound from './pages/_404.js';
import Header from './header.js';

import type { PrerenderResult } from 'preact-iso/prerender';

const About = lazy(() => import('./pages/about/index.js'));

function App(): JSX.Element {
  return (
    <LocationProvider>
      <div class="app">
        <Header />
        <ErrorBoundary>
          <Router>
            <Home path="/" />
            <About path="/about" />
            <NotFound default />
          </Router>
        </ErrorBoundary>
      </div>
    </LocationProvider>
  );
}

hydrate(<App />);

export async function prerender(
  data: Record<string | number | symbol, never>
): Promise<PrerenderResult> {
  const { default: prerender } = await import('preact-iso/prerender');
  return await prerender(<App {...data} />);
}
