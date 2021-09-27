import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Menu } from './pages/menu/menu';
import { ErrorPage } from './pages/404/index';
import { LoginPage } from './pages/login/login';
import { SignUpPage } from './pages/signup/signup';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <Route path='/home' component={Home} />
      <Route path='/menu' component={Menu} />
      <Route path='/signup' component={SignUpPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

// {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}