import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarMakes from './pages/CarMakes';
import ErrorBoundary from './components/ErrorBoundary';
import CarModels from './pages/CarModels';
import FuelTypes from './pages/FuelTypes';
import BodyTypes from './pages/BodyTypes';
import EngineCapacity from './pages/EngineCapacity';
import Vehicles from './pages/Vehicles';
import VehicleDetail from './pages/VehicleDetail';

import { Title, TitleWrapper } from './styles';

const App: React.FC = () => {
  return (
    <>
      <TitleWrapper>
        <Title>
          Where's My Car?{' '}
          <span role="img" aria-label="car emoji">
            🚘
          </span>
        </Title>
      </TitleWrapper>
      <Router>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/">
              <CarMakes />
            </Route>
            <Route exact path="/models">
              <CarModels />
            </Route>
            <Route exact path="/fueltypes">
              <FuelTypes />
            </Route>
            <Route exact path="/bodytypes">
              <BodyTypes />
            </Route>
            <Route exact path="/enginecapacity">
              <EngineCapacity />
            </Route>
            <Route exact path="/vehicles">
              <Vehicles />
            </Route>
            <Route exact path="/vehicle">
              <VehicleDetail />
            </Route>
          </Switch>
        </ErrorBoundary>
      </Router>
    </>
  );
};

export default App;
