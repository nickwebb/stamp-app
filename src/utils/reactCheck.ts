import React from 'react';

export const checkReactExports = () => {
  console.log('=== React Exports Check ===');
  console.log({
    version: React.version,
    environment: process.env.NODE_ENV,
    isClient: typeof window !== 'undefined',
    nextConfig: {
      reactRoot: process.env.__NEXT_REACT_ROOT,
      resolveMode: process.env.__NEXT_RESOLVE_MODE
    }
  });
}; 