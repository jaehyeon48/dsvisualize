import React from 'react';

import CloseIcon from '../CloseIcon';

const BstMethodsInfo = ({ closeInfoFunc }) => {
  return (
    <div className="bst-methods-info">
      <div className="bst-methods-close">
        <CloseIcon onClickFunction={closeInfoFunc} />
      </div>
      1234test
    </div>
  );
}

export default BstMethodsInfo;
