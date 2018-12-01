import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import LinearIndeterminate from './components/LinearIndeterminate/LinearIndeterminate';
import store from '../data/store/store';
const App = lazy(() => import('./components/App/App'));
const Login = lazy(() => import('./components/Login/Login'));

const Routes = () => <Router>
  <Provider store={store}>
    <Suspense fallback={<LinearIndeterminate />}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/app" component={App} />
      </Switch>
    </Suspense>
  </Provider>
</Router>

export default Routes;
