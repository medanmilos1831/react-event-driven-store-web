import React, { PropsWithChildren } from 'react';

export const Scroll = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full w-full relative">
      <div
        className={`absolute h-full w-full`}
        style={{
          overflow: 'auto',
        }}
      >
        {children}
      </div>
    </div>
  );
};
