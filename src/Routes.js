import { Switch, Route } from 'react-router-dom';
import { Done } from './pages/done/done';
import { Menu } from './pages/menu/menu';
import { ErrorPage } from './pages/404/index';
import { SignUpPage } from './pages/signup/signup';
import { Unauthorized } from './pages/unauthorized/unauthorized';
import History from './pages/history/history';
import LoginPage from './pages/login/login';
import Kitchen from './pages/kitchen/kitchen';

import { PublicRoute, PrivateRoute } from './routes/private_routes';

export const Routes = () => {

  return (
    <Switch>
      <PublicRoute exact path='/' component={LoginPage} />
      <PrivateRoute exact path='/done' component={Done} />
      <PrivateRoute exact path='/salao' component={Menu} />
      <PrivateRoute exact path='/kitchen' component={Kitchen} />
      <PrivateRoute exact path='/history' component={History} />
      <PublicRoute exact path='/signup' component={SignUpPage} />
      <Route exact path='/unauthorized' component={Unauthorized} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

// {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}