import React, { useState, useEffect } from 'react';

import ReturnToHome from '../ReturnToHome';
import DllCanvas from './DllCanvas';
import { DLL } from './DLL_class';
import './doublyLinkedList.css';

const DoublyLinkedList = () => {
  const [nodeData, setNodeData] = useState([]);
  const [nodeLength, setNodeLength] = useState(0);
  const [isMaxLength, setIsMaxLength] = useState(false);
  const [inputData, setInputData] = useState('');
  const [inputIndex, setInputIndex] = useState('');

  useEffect(() => {
    if (nodeLength >= 12) {
      setIsMaxLength(true);
    }
    else {
      setIsMaxLength(false);
    }
  }, [nodeLength]);

  const handleChangeInputData = (e) => {
    setInputData(e.target.value);
  }

  const handleChangeInputIndex = (e) => {
    setInputIndex(e.target.value);
  }

  const handleSetNodeData = () => {
    setNodeData(DLL.getAllNodesForRender());
    setNodeLength(DLL.getLength());
    setInputData('');
    setInputIndex('');
  }

  const handleAppendDLL = () => {
    if (inputData.trim() === '') {
      return alert('Please input valid data.');
    }
    DLL.append(inputData);
    handleSetNodeData();
  }

  const handlePopDLL = () => {
    if (nodeData.length === 0) {
      return alert("The list is empty.");
    }
    DLL.pop();
    handleSetNodeData();
  }

  const handleUnshiftDLL = () => {
    if (inputData.trim() === '') {
      return alert('Please input valid data');
    }
    DLL.unshift(inputData);
    handleSetNodeData();
  }

  const handleShiftDLL = () => {
    if (nodeData.length === 0) {
      return alert("The list is empty.");
    }
    DLL.shift();
    handleSetNodeData();
  }

  const handleInsertAtDLL = () => {
    if (inputIndex.trim() === '' || isNaN(parseInt(inputIndex))) {
      return alert('Please input valid index');
    }
    if (inputData.trim() === '') {
      return alert('Please input valid data');
    }

    const insertAtResult = DLL.insertAt(parseInt(inputIndex), inputData);
    if (insertAtResult === -1) {
      return alert('Index out of bounds.');
    }
    handleSetNodeData();
  }

  const handleRemoveAtDLL = () => {
    if (inputIndex.trim() === '' || isNaN(parseInt(inputIndex))) {
      return alert('Please input valid index');
    }
    const removeAtResult = DLL.removeAt(parseInt(inputIndex));
    if (removeAtResult === -1) {
      return alert('Index out of bounds.');
    }
    handleSetNodeData();
  }

  const handleClearDLL = () => {
    if (nodeData.length === 0) {
      return alert("The list is empty.");
    }
    if (window.confirm('Would you clear the list?')) {
      DLL.clear();
      handleSetNodeData();
    }
  }

  const maxLengthColor = () => {
    if (isMaxLength) {
      return { color: 'red' };
    }
  }

  return (
    <React.Fragment>
      <ReturnToHome />
      <div className="doubly-linked-list">
        <h1 className="ddl-header">Doubly Linked List</h1>
        <div className="dll-actions">
          <div className="dll-length">
            Length: <span style={maxLengthColor()}>{nodeLength}</span> / 12
          </div>
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
              disabled={isMaxLength}
            >APPEND</button>
            <button
              className="btn btn-dll-pop"
              type="button"
              onClick={handlePopDLL}
            >POP</button>
            <button
              className="btn btn-dll-unshift"
              type="button"
              onClick={handleUnshiftDLL}
              disabled={isMaxLength}
            >UNSHIFT</button>
            <button
              className="btn btn-dll-shift"
              type="button"
              onClick={handleShiftDLL}
            >SHIFT</button>
            <button
              className="btn btn-dll-insertAt"
              type="button"
              onClick={handleInsertAtDLL}
              disabled={isMaxLength}
            >INSERT AT</button>
            <button
              className="btn btn-dll-removeAt"
              type="button"
              onClick={handleRemoveAtDLL}
            >REMOVE AT</button>
            <button
              className="btn btn-dll-clear"
              type="button"
              onClick={handleClearDLL}
            >CLEAR</button>
          </div>
        </div>
        <div className="node-items">
          <DllCanvas
            nodes={nodeData}
          />
        </div>
      </div>
    </React.Fragment>

  );
}


export default DoublyLinkedList;
