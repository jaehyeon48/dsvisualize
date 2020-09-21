import React, { useState, useEffect } from 'react';

import { DLL } from './DLL_class';
import './doublyLinkedList.css';

const DoublyLinkedList = () => {
  const [nodeData, setNodeData] = useState([]);
  const [inputData, setInputData] = useState('');
  const [inputIndex, setInputIndex] = useState('');

  const handleChangeInputData = (e) => {
    setInputData(e.target.value);
  }

  const handleChangeInputIndex = (e) => {
    setInputIndex(e.target.value);
  }

  const handleAppendDLL = () => {
    DLL.append(inputData);
    setNodeData(DLL.getAllNodesForRender());
    setInputData('');
  }

  const handlePopDLL = () => {
    DLL.pop();
    setNodeData(DLL.getAllNodesForRender());
  }

  const handleClearDLL = () => {
    if (window.confirm('Would you clear the list?')) {
      DLL.clear();
      setNodeData(DLL.getAllNodesForRender());
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
            className="btn btn-dll-append"
            type="button"
            onClick={handleAppendDLL}
          >APPEND</button>
          <button
            className="btn btn-dll-pop"
            type="button"
            onClick={handlePopDLL}
          >POP</button>
          <button
            className="btn btn-dll-unshift"
            type="button"
          >UNSHIFT</button>
          <button
            className="btn btn-dll-shift"
            type="button"
          >SHIFT</button>
          <button
            className="btn btn-dll-clear"
            type="button"
            onClick={handleClearDLL}
          >CLEAR</button>
        </div>
      </div>
      <div>
        {nodeData.map(node => (
          <div key={node.id}>{node.data}</div>
        ))}
      </div>
    </div>
  );
}


export default DoublyLinkedList;
