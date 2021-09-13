import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home.js';
import { Sobre } from './pages/Sobre/Sobre.js';
import { Error } from './pages/PageNotFound/index.js';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/sobre' component={Sobre} />
      <Route component={Error} />
    </Switch>
  );
};
 
// {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}