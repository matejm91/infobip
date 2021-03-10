import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFoundPage from 'components/common/NotFoundPage';
import DataListContainer from 'components/data/list/DataListContainer';

const router = (
  <Router>
    <Switch>
      <Route exact path="/" component={DataListContainer} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default router;