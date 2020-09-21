import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} exact={true} />
      </Switch>
    </Router>
  );
}

export default App;
