import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import DoublyLinkedList from './components/doublyLinkedList/DoublyLinkedList';
import './app.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dsvisualizer" component={Main} exact={true} />
        <Route path="/dll" component={DoublyLinkedList} exact={true} />
      </Switch>
    </Router>
  );
}

export default App;
