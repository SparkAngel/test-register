import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/HomePage';
import Clients from './components/Clients';
import About from './components/About';
import registerContainer from './container/registerContainer';
import './App.css';

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/clients"
        exact
        component={Clients}
      />
      <Route path="/register" exact component={registerContainer} />
      <Route path="/about" exact component={About} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
