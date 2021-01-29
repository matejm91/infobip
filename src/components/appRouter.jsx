import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFoundPage from 'components/common/NotFoundPage';
import BaseComponent from 'components/app/BaseComponent';

const router = (
  <Router>
    <Switch>
      <Route exact path="/" component={BaseComponent} />
      {/*<Route exact path="/empty" component={ component name goes here } />*/}
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default router;