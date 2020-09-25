import React, { useState, useEffect } from 'react';

import ReturnToHome from '../ReturnToHome';
import { STACK } from './Stack_class';
import './stack.css';

const Stack = () => {
  const [stackData, setStackData] = useState([]);
  const [stackSize, setStackSize] = useState(0);
  const [isMaxSize, setIsMaxSize] = useState(false);
  const [inputData, setInputData] = useState('');

  useEffect(() => {
    if (stackSize >= 10) {
      setIsMaxSize(true);
    }
    else {
      setIsMaxSize(false);
    }
  }, [stackSize]);

  const handleChangeInputData = (e) => {
    setInputData(e.target.value);
  }

  const handleSetStackData = () => {
    setStackData(STACK.getAllNodesForRender());
    setStackSize(STACK.getSize());
    setInputData('');
  }


  const handlePushStack = () => {
    if (inputData.trim() === '') {
      return alert('Please input valid data.');
    }
    STACK.push(inputData);
    handleSetStackData();
  }

  const handlePopStack = () => {
    if (stackSize === 0) {
      return alert("The stack is empty.");
    }
    STACK.pop();
    handleSetStackData();
  }

  const handlePeekStack = () => { }

  const handleClearStack = () => {
    if (stackSize === 0) {
      return alert("The stack is empty.");
    }
    if (window.confirm('Would you like to clear the stack?')) {
      STACK.clear();
      handleSetStackData();
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
      <div className="stack-container">
        <h1 className="stack-header">Stack</h1>
        <div className="stack-actions">
          <div className="stack-size">
            Size: <span style={maxSizeColor()}>{stackSize}</span> / 10
          </div>
          <div className="stack-input">
            <label className="stack-input-label">
              Data:
              <input
                className="stack-input-field"
                type="text"
                value={inputData}
                onChange={handleChangeInputData}
              />
            </label>
          </div>
          <div className="stack-buttons">
            <button
              className="btn btn-stack-push"
              type="button"
              onClick={handlePushStack}
              disabled={isMaxSize}
            >
              PUSH
            </button>
            <button
              className="btn btn-stack-pop"
              type="button"
              onClick={handlePopStack}
            >
              POP
            </button>
            <button
              className="btn btn-stack-peek"
              type="button"
              onClick={handlePeekStack}
              disabled={isMaxSize}
            >
              PEEK
            </button>
            <button
              className="btn btn-stack-clear"
              type="button"
              onClick={handleClearStack}
            >
              CLEAR
            </button>
          </div>
        </div>
        <div className="stack-items">
        </div>
      </div>
    </React.Fragment>
  );
}

export default Stack;
