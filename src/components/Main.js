import React from 'react';
import { useHistory } from 'react-router-dom';

import './main.css';

const Main = () => {
  let history = useHistory();

  const redirectToSLL = () => {
    history.push('/sll');
  }

  const redirectToDLL = () => {
    history.push('/dll');
  }

  const redirectToStack = () => {
    history.push('/stack');
  }

  const redirectToQueue = () => {
    history.push('/queue');
  }

  const redirectToBST = () => {
    history.push('/bst');
  }

  return (
    <div className="main-page">
      <h1 className="main-page-header">
        Data Structures Visualizer
      </h1>
      <div className="select-data-structures">
        <div
          className="data-structures-item sll"
          onClick={redirectToSLL}
        >Singly Linked List</div>
        <div
          className="data-structures-item dll"
          onClick={redirectToDLL}
        >Doubly Linked List</div>
        <div
          className="data-structures-item stack"
          onClick={redirectToStack}
        >Stack</div>
        <div
          className="data-structures-item queue"
          onClick={redirectToQueue}
        >Queue</div>
        <div
          className="data-structures-item bst"
          onClick={redirectToBST}
        >Binary Search Tree</div>
      </div>
    </div>
  );
}

export default Main;
