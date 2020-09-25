import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ReturnToHome from '../ReturnToHome';
import SllCanvas from './SllCanvas';
import { SLL } from './SLL_class';
import './singlyLinkedList.css';

const SinglyLinkedList = () => {
  let location = useLocation();
  const [nodeData, setNodeData] = useState([]);
  const [nodeLength, setNodeLength] = useState(0);
  const [isMaxLength, setIsMaxLength] = useState(false);
  const [inputData, setInputData] = useState('');
  const [inputIndex, setInputIndex] = useState('');

  useEffect(() => { // clear list when a user changes route
    SLL.clear();
    handleSetNodeData();
  }, [location]);

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
    setNodeData(SLL.getAllNodesForRender());
    setNodeLength(SLL.getLength());
    setInputData('');
    setInputIndex('');
  }

  const handleAppendSLL = () => {
    if (inputData.trim() === '') {
      return alert('Please input valid data.');
    }
    SLL.append(inputData);
    handleSetNodeData();
  }

  const handlePopSLL = () => {
    if (nodeLength === 0) {
      return alert("The list is empty.");
    }
    SLL.pop();
    handleSetNodeData();
  }

  const handleUnshiftSLL = () => {
    if (inputData.trim() === '') {
      return alert('Please input valid data');
    }
    SLL.unshift(inputData);
    handleSetNodeData();
  }

  const handleShiftSLL = () => {
    if (nodeLength === 0) {
      return alert("The list is empty.");
    }
    SLL.shift();
    handleSetNodeData();
  }

  const handleInsertAtSLL = () => {
    if (inputIndex.trim() === '' || isNaN(parseInt(inputIndex))) {
      return alert('Please input valid index');
    }
    if (inputData.trim() === '') {
      return alert('Please input valid data');
    }

    const insertAtResult = SLL.insertAt(parseInt(inputIndex), inputData);
    if (insertAtResult === -1) {
      return alert('Index out of bounds.');
    }
    handleSetNodeData();
  }

  const handleRemoveAtSLL = () => {
    if (inputIndex.trim() === '' || isNaN(parseInt(inputIndex))) {
      return alert('Please input valid index');
    }
    const removeAtResult = SLL.removeAt(parseInt(inputIndex));
    if (removeAtResult === -1) {
      return alert('Index out of bounds.');
    }
    handleSetNodeData();
  }

  const handleClearSLL = () => {
    if (nodeLength === 0) {
      return alert("The list is empty.");
    }
    if (window.confirm('Would you clear the list?')) {
      SLL.clear();
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
      <div className="singly-linked-list">
        <h1 className="sll-header">Singly Linked List</h1>
        <div className="sll-actions">
          <div className="sll-length">
            Length: <span style={maxLengthColor()}>{nodeLength}</span> / 12
          </div>
          <div className="sll-input">
            <label className="sll-input-label">
              Index:
            <input
                className="sll-input-field"
                type="text"
                value={inputIndex}
                onChange={handleChangeInputIndex}
              />
            </label>
            <label className="sll-input-label">
              Data:
            <input
                className="sll-input-field"
                type="text"
                value={inputData}
                onChange={handleChangeInputData}
              />
            </label>
          </div>
          <div className="sll-buttons">
            <button
              className="btn btn-sll-append"
              type="button"
              onClick={handleAppendSLL}
              disabled={isMaxLength}
            >APPEND</button>
            <button
              className="btn btn-sll-pop"
              type="button"
              onClick={handlePopSLL}
            >POP</button>
            <button
              className="btn btn-sll-unshift"
              type="button"
              onClick={handleUnshiftSLL}
              disabled={isMaxLength}
            >UNSHIFT</button>
            <button
              className="btn btn-sll-shift"
              type="button"
              onClick={handleShiftSLL}
            >SHIFT</button>
            <button
              className="btn btn-sll-insertAt"
              type="button"
              onClick={handleInsertAtSLL}
              disabled={isMaxLength}
            >INSERT AT</button>
            <button
              className="btn btn-sll-removeAt"
              type="button"
              onClick={handleRemoveAtSLL}
            >REMOVE AT</button>
            <button
              className="btn btn-sll-clear"
              type="button"
              onClick={handleClearSLL}
            >CLEAR</button>
          </div>
        </div>
        <div className="node-items">
          <SllCanvas nodes={nodeData} />
        </div>
      </div>
    </React.Fragment>
  );
}


export default SinglyLinkedList;
