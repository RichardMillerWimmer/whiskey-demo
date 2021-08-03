import React from 'react';
import logo from './logo.svg';
import './App.css';

import routes from './routes'

import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
        {routes}
    </div>
  );
}

export default App;
