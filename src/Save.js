import React from 'react';

const Save = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Save;
