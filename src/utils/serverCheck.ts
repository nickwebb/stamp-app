export const checkServerState = () => {
  try {
    console.log('=== Server State Check ===');
    console.log({
      isServer: typeof window === 'undefined',
      isDev: process.env.NODE_ENV === 'development',
      isProd: process.env.NODE_ENV === 'production',
      nextConfig: process.env.__NEXT_CONFIG,
      buildId: process.env.__NEXT_BUILD_ID,
      nodeVersion: process.version,
    });

    // Check for common development server issues
    if (typeof window !== 'undefined') {
      console.log('Client-side environment:', {
        hasHMR: typeof module !== 'undefined' && (module as any).hot !== undefined,
        hasProcess: typeof process !== 'undefined',
        publicUrl: process.env.NEXT_PUBLIC_URL,
      });
    }
  } catch (error) {
    console.error('Error in server state check:', error);
  }
}; 