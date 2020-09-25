import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ReturnToHome from '../ReturnToHome';
import QueueCanvas from './QueueCanvas';
import { QUEUE } from './QUEUE_class';
import './queue.css';

const Queue = () => {
  let location = useLocation();

  const [queueData, setStackData] = useState([]);
  const [queueSize, setQueueSize] = useState(0);
  const [isMaxSize, setIsMaxSize] = useState(false);
  const [inputData, setInputData] = useState('');

  useEffect(() => { // clear queue when a user changes route
    QUEUE.clear();
    handleSetQueueData();
  }, [location]);

  useEffect(() => {
    if (queueSize >= 10) {
      setIsMaxSize(true);
    }
    else {
      setIsMaxSize(false);
    }
  }, [queueSize]);

  const handleChangeInputData = (e) => {
    setInputData(e.target.value);
  }

  const handleSetQueueData = () => {
    setStackData(QUEUE.getAllNodesForRender());
    setQueueSize(QUEUE.getSize());
    setInputData('');
  }

  const handleEnqueueData = () => {
    if (inputData.trim() === '') {
      return alert('Please input valid data.');
    }
    QUEUE.enqueue(inputData);
    handleSetQueueData();
  }

  const handleDequeueData = () => {
    if (queueSize === 0) {
      return alert("The queue is empty.");
    }
    QUEUE.dequeue();
    handleSetQueueData();
  }

  const handleClearStack = () => {
    if (queueSize === 0) {
      return alert("The queue is empty.");
    }
    if (window.confirm('Would you like to clear the queue?')) {
      QUEUE.clear();
      handleSetQueueData();
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
      <div className="queue-container">
        <h1 className="queue-header">Queue</h1>
        <div className="queue-actions">
          <div className="queue-size">
            Size: <span style={maxSizeColor()}>{queueSize}</span> / 10
          </div>
          <div className="queue-input">
            <label className="queue-input-label">
              Data:
              <input
                className="queue-input-field"
                type="text"
                value={inputData}
                onChange={handleChangeInputData}
              />
            </label>
          </div>
          <div className="queue-buttons">
            <button
              className="btn btn-queue-push"
              type="button"
              onClick={handleEnqueueData}
              disabled={isMaxSize}
            >
              ENQUEUE
            </button>
            <button
              className="btn btn-queue-pop"
              type="button"
              onClick={handleDequeueData}
            >
              DEQUEUE
            </button>
            <button
              className="btn btn-queue-clear"
              type="button"
              onClick={handleClearStack}
            >
              CLEAR
            </button>
          </div>
        </div>
        <div className="queue-items">
          <QueueCanvas queueItems={queueData} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Queue;
