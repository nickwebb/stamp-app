import React from 'react';

export const JSXCheck: React.FC = () => {
  console.log('JSX Runtime:', {
    jsxRuntime: process.env.__NEXT_REACT_ROOT,
    reactVersion: React.version,
    isDevelopment: process.env.NODE_ENV === 'development'
  });
  
  return <div>JSX Test Component</div>;
};

export default JSXCheck; 