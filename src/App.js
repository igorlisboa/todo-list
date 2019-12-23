import React from 'react';
import Routes from './router';
import './styles.css'
import Header from './Components/Header/index.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
