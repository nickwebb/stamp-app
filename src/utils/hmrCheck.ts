declare global {
  interface Window {
    __webpack_hash__: any;
    __REACT_REFRESH_RUNTIME__: any;
    __NEXT_HMR: any;
  }
}

export const checkHMRState = () => {
  console.log('=== HMR State Check ===');
  console.log({
    webpackHMR: typeof window !== 'undefined' && !!window.__webpack_hash__,
    reactRefresh: typeof window !== 'undefined' && !!window.__REACT_REFRESH_RUNTIME__,
    nextHMR: typeof window !== 'undefined' && !!window.__NEXT_HMR,
    moduleResolution: process.env.__NEXT_RESOLVE_MODE
  });
}; 