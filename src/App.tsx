import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarMakes from './pages/CarMakes';
import ErrorBoundary from './components/ErrorBoundary';
import CarModels from './pages/CarModels';
import FuelTypes from './pages/FuelTypes';
import BodyTypes from './pages/BodyTypes';
import EngineCapacity from './pages/EngineCapacity';
import Vehicles from './pages/Vehicles';
import VehicleDetail from './pages/VehicleDetail';
import Button from './components/Button';
import lightTheme from './themes/light';
import darkTheme from './themes/dark';

import { Title, TitleWrapper } from './styles';

const App: React.FC = () => {
  const stored = localStorage.getItem('isLight');
  const [isLight, setLightMode] = useState(stored === 'true' ? true : false);

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <TitleWrapper>
        <Title>
          Where's My Car?{' '}
          <span
            onClick={() => {
              setLightMode(!isLight);
              localStorage.setItem('isLight', `${!isLight}`);
            }}
            role="img"
            aria-label="car emoji">
            🚘
          </span>
        </Title>
        <Button
          type="button"
          label="Dark/Night"
          onClick={() => {
            setLightMode(!isLight);
            localStorage.setItem('isLight', `${!isLight}`);
          }}
        />
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
    </ThemeProvider>
  );
};

export default App;
