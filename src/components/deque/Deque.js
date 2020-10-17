import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ReturnToHome from '../ReturnToHome';
import DequeCanvas from './DequeCanvas';
import { DEQUE } from './DEQUE-class';
import './deque.css';

const Deque = () => {
  let location = useLocation();

  const [dequeData, setDequeData] = useState([]);
  const [DequeSize, setDequeSize] = useState(0);
  const [isMaxSize, setIsMaxSize] = useState(false);
  const [inputData, setInputData] = useState('');

  useEffect(() => { // clear queue when a user changes route
    DEQUE.clear();
    handleSetDequeData();
  }, [location]);

  useEffect(() => {
    if (DequeSize >= 10) {
      setIsMaxSize(true);
    }
    else {
      setIsMaxSize(false);
    }
  }, [DequeSize]);

  const handleChangeInputData = (e) => {
    setInputData(e.target.value);
  }

  const handleSetDequeData = () => {
    setDequeData(DEQUE.getAllNodesForRender());
    setDequeSize(DEQUE.getSize());
    setInputData('');
  }

  const handleInsertFrontData = () => {
    if (inputData.trim() === '') {
      return alert('Please input valid data.');
    }
    DEQUE.insertFront(inputData);
    handleSetDequeData();
  }

  const handleInsertBackData = () => {
    if (inputData.trim() === '') {
      return alert('Please input valid data.');
    }
    DEQUE.insertBack(inputData);
    handleSetDequeData();
  }

  const handleRemoveFrontData = () => {
    if (DequeSize === 0) {
      return alert("The queue is empty.");
    }
    DEQUE.removeFront();
    handleSetDequeData();
  }

  const handleRemoveBackData = () => {
    if (DequeSize === 0) {
      return alert("The queue is empty.");
    }
    DEQUE.removeBack();
    handleSetDequeData();
  }

  const handleClearDeque = () => {
    if (DequeSize === 0) {
      return alert("The queue is empty.");
    }
    if (window.confirm('Would you like to clear the queue?')) {
      DEQUE.clear();
      handleSetDequeData();
    }
  }

  const maxSizeColor = () => {
    if (isMaxSize) {
      return { color: 'red' };
    }
  }

  return (
    <React.Fragment>
      <ReturnToHome />
      <div className="deque-container">
        <h1 className="deque-header">Deque</h1>
        <div className="deque-actions">
          <div className="deque-size">
            Size: <span style={maxSizeColor()}>{DequeSize}</span> / 10
          </div>
          <div className="deque-input">
            <label className="deque-input-label">
              Data:
              <input
                className="deque-input-field"
                type="text"
                value={inputData}
                onChange={handleChangeInputData}
              />
            </label>
          </div>
          <div className="deque-buttons">
            <button
              className="btn btn-deque-insert-front"
              type="button"
              onClick={handleInsertFrontData}
              disabled={isMaxSize}
            >
              INSERT FRONT
            </button>
            <button
              className="btn btn-deque-insert-back"
              type="button"
              onClick={handleInsertBackData}
              disabled={isMaxSize}
            >
              INSERT BACK
            </button>
            <button
              className="btn btn-deque-remove-front"
              type="button"
              onClick={handleRemoveFrontData}
            >
              REMOVE FRONT
            </button>
            <button
              className="btn btn-deque-remove-back"
              type="button"
              onClick={handleRemoveBackData}
            >
              REMOVE BACK
            </button>
            <button
              className="btn btn-deque-clear"
              type="button"
              onClick={handleClearDeque}
            >
              CLEAR
            </button>
          </div>
        </div>
        <div className="deque-items">
          <DequeCanvas dequeItems={dequeData} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Deque;
