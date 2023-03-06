import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Profile from 'pages/Profile';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/profile" exact>
        <Profile />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
