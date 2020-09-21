import React, { useState } from 'react';

import './doublyLinkedList.css';

const DoublyLinkedList = () => {
  const [inputData, setInputData] = useState('');
  const [inputIndex, setInputIndex] = useState('');

  const handleChangeInputData = (e) => {
    setInputData(e.target.value);
  }

  const handleChangeInputIndex = (e) => {
    setInputIndex(e.target.value);
  }

  const handleCreateDLL = () => {
    console.log(inputData);
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
          >APPEND</button>
          <button
            className="btn btn-dll-remove"
            type="button"
          >REMOVE</button>
          <button
            className="btn btn-dll-unshift"
            type="button"
          >UNSHIFT</button>
          <button
            className="btn btn-dll-shift"
            type="button"
          >SHIFT</button>
        </div>
      </div>
    </div>
  );
}


export default DoublyLinkedList;
