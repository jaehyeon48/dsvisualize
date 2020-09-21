import React from 'react';

import './main.css';

const Main = () => {
  return (
    <div className="main-page">
      <h1 className="main-page-header">
        Data Structures Visualizer
      </h1>
      <div className="select-data-structures">
        <div className="data-structures-item sll">Singly Linked List</div>
        <div className="data-structures-item dll">Doubly Linked List</div>
        <div className="data-structures-item stack">Stack</div>
        <div className="data-structures-item queue">Queue</div>
        <div className="data-structures-item bst">Binary Search Tree</div>
      </div>
    </div>
  );
}

export default Main;
