import React from 'react';
import Navbar from './components/navbar/Navbar';
import Routes from './routes';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes className="body-router" />
    </div>
  );
}

export default App;
