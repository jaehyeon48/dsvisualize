import React, { useState, useEffect } from 'react';

import { DLinkedList } from './DLL_class';
import './doublyLinkedList.css';

const DoublyLinkedList = () => {
  let DOUBLYLINKEDLIST;
  const [isDLLCreated, setIsDLLCreated] = useState(false);
  const [nodeData, setNodeData] = useState([]);
  const [inputData, setInputData] = useState('');
  const [inputIndex, setInputIndex] = useState('');

  const handleChangeInputData = (e) => {
    setInputData(e.target.value);
  }

  const handleChangeInputIndex = (e) => {
    setInputIndex(e.target.value);
  }

  const handleCreateDLL = () => {
    if (inputData.trim() === '') {
      return alert("Please input valid data");
    }
    DOUBLYLINKEDLIST = new DLinkedList(inputData);
    setIsDLLCreated(true);
    setNodeData(DOUBLYLINKEDLIST.getAllNodesForRender());
    setInputData('');
  }

  const handleClearDLL = () => {
    if (DOUBLYLINKEDLIST) {
      DOUBLYLINKEDLIST.clear();
      setNodeData(DOUBLYLINKEDLIST.getAllNodesForRender());
    }
  }

  return (
    <div className="doubly-linked-list">
      <h1 className="ddl-header">Doubly Linked List</h1>
      <div className="dll-actions">
        <div className="dll-input">
          <label className="dll-input-label">
            Index:
            <input
              className="dll-input-field"
              type="text"
              value={inputIndex}
              onChange={handleChangeInputIndex}
            />
          </label>
          <label className="dll-input-label">
            Data:
            <input
              className="dll-input-field"
              type="text"
              value={inputData}
              onChange={handleChangeInputData}
            />
          </label>
        </div>
        <div className="dll-buttons">
          <button
            className="btn btn-dll-create"
            type="button"
            onClick={handleCreateDLL}
          >CREATE</button>
          <button
            className="btn btn-dll-append"
            type="button"
            disabled={!isDLLCreated}
          >APPEND</button>
          <button
            className="btn btn-dll-remove"
            type="button"
            disabled={!isDLLCreated}
          >REMOVE</button>
          <button
            className="btn btn-dll-unshift"
            type="button"
            disabled={!isDLLCreated}
          >UNSHIFT</button>
          <button
            className="btn btn-dll-shift"
            type="button"
            disabled={!isDLLCreated}
          >SHIFT</button>
          <button
            className="btn btn-dll-clear"
            type="button"
            disabled={!isDLLCreated}
            onClick={handleClearDLL}
          >CLEAR</button>
        </div>
      </div>
      <div>
        {isDLLCreated && nodeData.map(node => (
          <div key={node.id}>{node.data}</div>
        ))}
      </div>
    </div>
  );
}


export default DoublyLinkedList;
