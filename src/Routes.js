import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home.js';
import { Sobre } from './pages/Sobre/Sobre.js';
import { ErrorPage } from './pages/PageNotFound/index.js';
import { Login } from './pages/Login/Login.js';
import { SignUpPage } from './pages/SignUp/index';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/sobre' component={Sobre} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUpPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

// {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}