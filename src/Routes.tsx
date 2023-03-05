import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
