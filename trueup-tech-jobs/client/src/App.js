import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import FloatingGraphics from './components/FloatingGraphics';
import './App.css'; // Importing global styles for the application

/**
 * App component serves as the root of the application.
 * It integrates the Header, MainContent, and FloatingGraphics components
 * to construct the overall page layout as described.
 */
function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <FloatingGraphics />
    </div>
  );
}

export default App;