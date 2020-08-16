import React from 'react';
import CarSelection from './components/CarSelection';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div>
        <CarSelection />
      </div>
    </ErrorBoundary>
  );
};

export default App;
