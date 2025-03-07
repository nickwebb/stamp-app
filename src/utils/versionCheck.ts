import React from 'react';
import { version as nextVersion } from 'next/package.json';

export const checkVersions = () => {
  console.log('=== Version Check ===');
  console.log({
    react: React.version,
    next: nextVersion,
    node: process.version,
    env: process.env.NODE_ENV
  });

  // Check for version compatibility
  const [reactMajor, reactMinor] = React.version.split('.');
  if (reactMajor !== '18' || parseInt(reactMinor) < 2) {
    console.warn('Potential React version compatibility issue');
  }
}; 