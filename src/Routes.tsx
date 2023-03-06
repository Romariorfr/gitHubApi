import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Home />
      <Route path="/" exact></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
