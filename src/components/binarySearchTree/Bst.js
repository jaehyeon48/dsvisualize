import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ReturnToHome from '../ReturnToHome';
import BstCanvas from './BstCanvas';
import { BST } from './BST_class';
import './bst.css';

const Bst = () => {
  let location = useLocation();

  const [bstData, setBstData] = useState([]);
  const [bstSize, setBstSize] = useState(0);
  const [bstDepth, setBstDepth] = useState(0);
  const [isMaxSize, setIsMaxSize] = useState(false);
  const [isMaxDepth, setIsMaxDepth] = useState(false);
  const [inputData, setInputData] = useState('');

  useEffect(() => { // clear tree when a user changes route
    BST.clear();
    handleSetBstData();
  }, [location]);

  // useEffect(() => {
  //   console.log(bstData);
  // }, [bstData]);

  useEffect(() => {
    if (bstSize >= 31) {
      setIsMaxSize(true);
    }
    else {
      setIsMaxSize(false);
    }
  }, [bstSize]);

  useEffect(() => {
    if (bstDepth >= 4) {
      setIsMaxDepth(true);
    }
    else {
      setIsMaxDepth(false);
    }
  }, [bstDepth]);

  const handleChangeInputData = (e) => {
    setInputData(e.target.value);
  }

  const handleSetBstData = () => {
    const dataArray = [];
    BST.getAllNodesForRender(BST.getRoot(), dataArray);
    setBstData(dataArray.sort(sortByData).sort(sortByDepth));
    setBstSize(BST.getSize());
    setBstDepth(BST.getMaxDepth(BST.getRoot()));
    setInputData('');
  }

  const handleInsertData = () => {
    if (inputData.trim() === '') {
      return alert('Please input valid data.');
    }
    if (isMaxDepth && !isMaxSize) {
      // test if the max depth after inserting a new data is greater
      // than depth limit
      BST.insert(parseInt(inputData));
      const maxDepth = BST.getMaxDepth(BST.getRoot());
      BST.remove(parseInt(inputData));

      if (maxDepth > 4) {
        return alert('Out of the maximum depth. Please try another data.');
      }
      else {
        BST.insert(parseInt(inputData));
        handleSetBstData();
        return;
      }
    }
    BST.insert(parseInt(inputData));
    handleSetBstData();
  }

  const handleRemoveData = () => {
    if (bstSize === 0) {
      return alert("The tree is empty.");
    }
    if (inputData.trim() === '') {
      return alert('Please input valid data.');
    }
    BST.remove(parseInt(inputData));
    handleSetBstData();
  }

  const handleClearBst = () => {
    if (bstSize === 0) {
      return alert("The tree is empty.");
    }
    if (window.confirm('Would you like to clear the tree?')) {
      BST.clear();
      handleSetBstData();
    }
  }

  const colorMaxSize = () => {
    if (isMaxSize) {
      return { color: 'red' };
    }
  }

  const colorMaxDepth = () => {
    if (isMaxDepth) {
      return { color: 'red' };
    }
  }

  return (
    <React.Fragment>
      <ReturnToHome />
      <div className="bst-container">
        <h1 className="bst-header">Binary Search Tree</h1>
        <div className="bst-actions">
          <div className="bst-size">
            Size: <span style={colorMaxSize()}>{bstSize}</span> / 31
          </div>
          <div className="bst-size">
            Depth: <span style={colorMaxDepth()}>{bstDepth}</span> / 4
          </div>
          <div className="bst-input">
            <label className="bst-input-label">
              Data:
              <input
                className="bst-input-field"
                type="text"
                value={inputData}
                onChange={handleChangeInputData}
              />
            </label>
          </div>
          <div className="bst-buttons">
            <button
              className="btn btn-bst-insert"
              type="button"
              onClick={handleInsertData}
              disabled={isMaxSize}
            >
              INSERT
            </button>
            <button
              className="btn btn-bst-remove"
              type="button"
              onClick={handleRemoveData}
            >
              REMOVE
            </button>
            <button
              className="btn btn-bst-clear"
              type="button"
              onClick={handleClearBst}
            >
              CLEAR
            </button>
          </div>
        </div>
        <div className="bst-items">
          <BstCanvas bstItems={bstData} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Bst;


function sortByData(a, b) {
  return a['data'] - b['data'];
}

function sortByDepth(a, b) {
  return a['depth'] - b['depth'];
}