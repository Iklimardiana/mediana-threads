import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

export default function Loading() {
  return (
    <div className="fixed top-0 z-40 w-full">
      <LoadingBar
        className="bg-blue-500 h-2"
        style={{ borderRadius: '2px', transition: 'width 0.2s ease' }}
      />
    </div>
  );
}
