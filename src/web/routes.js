import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import LinearIndeterminate from './components/LinearIndeterminate/LinearIndeterminate';
// const App = lazy(() => import('./components/App/App'));
import App from './components/App/App';
const Login = lazy(() => import('./components/Login/Login'));

const { login } = require('../../config/variables');

const Routes = () => <Router>
  <Suspense fallback={<LinearIndeterminate />}>
    <Switch>
      {login && <Route exact path="/" component={Login} />}
      {login && <Route exact path="/app" component={App} />}
      {!login && <Route exact path="/" component={App} />}
    </Switch>
  </Suspense>
</Router>

export default Routes;
