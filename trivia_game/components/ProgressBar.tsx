"use client";

import { useState } from 'react';

export interface Progress {
    value: number;
    max: number;
}

export const ProgressBar: React.FC<Progress> = ({ value, max }) => {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  return (
    <div style={{ width: '100%', backgroundColor: '#e0e0de', borderRadius: 50 }}>
      <div style={{
        height: 20,
        width: `${percentage}%`,
        backgroundColor: '#007bff',
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 0.5s ease-in-out'
      }}>
        <span style={{ padding: 5, color: 'white', fontWeight: 'bold' }}>
          {`${percentage}%`}
        </span>
      </div>
    </div>
  );
};