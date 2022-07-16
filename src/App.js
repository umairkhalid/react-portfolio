import { lazy, Suspense } from 'react';

const PortfolioContainer = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./components/PortfolioContainer')), 2000);
  });
});

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioContainer />
      </Suspense>
    </div>
  );
};

export default App;
