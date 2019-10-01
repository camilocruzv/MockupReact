import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body'
import Filters from './components/Filters'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Filters />
      <div className="row">
        <Body />
      </div >
    </div>
  );
}

export default App;
