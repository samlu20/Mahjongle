import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tile from './tiles/tileSelector';
import TileSet from './common/tileSet';

function App() {
  return (
    <div className="App">
      <Tile />
      <TileSet />
    </div>
  );
}

export default App;
