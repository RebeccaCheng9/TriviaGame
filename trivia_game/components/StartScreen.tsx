import React, { FC } from 'react';
import './StartScreen.css'; // Optional: for styling

const StartScreen: FC = () => {
  return (
    <div className="start-container">
      <h1>Welcome to My App</h1>
      {/* You can add a logo, a spinner, or other content here */}
      <p>Loading application data...</p>
    </div>
  );
};

export default StartScreen;