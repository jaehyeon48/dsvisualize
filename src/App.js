import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import SinglyLinkedList from './components/singlyLinkedList/SinglyLinkedList';
import DoublyLinkedList from './components/doublyLinkedList/DoublyLinkedList';
import './app.css';

function App() {
  return (
    <Router basename="/dsvisualizer">
      <Switch>
        <Route path="/" component={Main} exact={true} />
        <Route path="/sll" component={SinglyLinkedList} exact={true} />
        <Route path="/dll" component={DoublyLinkedList} exact={true} />
      </Switch>
    </Router>
  );
}

export default App;
