import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import LinearIndeterminate from './components/LinearIndeterminate/LinearIndeterminate';
const App = lazy(() => import('./components/App/App'));
const Login = lazy(() => import('./components/Login/Login'));
// import App from './components/App/App';

const Routes = () => <Router>
  <Suspense fallback={<LinearIndeterminate />}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/app" component={App} />
    </Switch>
  </Suspense>
</Router>

export default Routes;
