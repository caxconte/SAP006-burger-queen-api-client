import { Switch, Route } from 'react-router-dom';
import { Done } from './pages/done/done';
import { Menu } from './pages/menu/menu';
import { ErrorPage } from './pages/404/index';
import { SignUpPage } from './pages/signup/signup';
import LoginPage from './pages/login/login';
import Kitchen from './pages/kitchen/kitchen';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <Route path='/done' component={Done} />
      <Route path='/salao' component={Menu} />
      <Route path='/kitchen' component={Kitchen} />
      <Route path='/signup' component={SignUpPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

// {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}