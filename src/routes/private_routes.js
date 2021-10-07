import { Route, Redirect } from "react-router-dom";

  const isLogged = () => !!localStorage.getItem("userToken");

  const PrivateRoute = (props) =>
    isLogged() ? <Route {...props} /> : <Redirect to="/" />;

  const PublicRoute = (props) =>
    isLogged() ? <Redirect to="/unauthorized" /> : <Route {...props} />;

  export {
    PrivateRoute,
    PublicRoute,
  }
