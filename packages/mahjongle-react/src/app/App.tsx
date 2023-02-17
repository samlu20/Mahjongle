import React from 'react';

import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Dashboard from '../components/Dashboard';
import HandBuilder from '../components/HandBuilder';
import NumberTiles from '../components/CharacterTiles';
import SiteHeader from '../core/SiteHeader';
import Tile from '../tiles/tileSelector';
import TileSet from '../common/tileSet';


function App() {

  const App = () => (
    <div className='App'>
      <SiteHeader />
      <div className='App-content'>
        <Outlet />
      </div>
    </div>
  );

  const router = createBrowserRouter([
    { element: <App />, children:  [
      { path: '/', element: <Dashboard /> },
      { path: '/add-hand', element: <HandBuilder /> },
      { path: '/numbers', element: <NumberTiles /> },
    ]}
  ]);

  return (
    <RouterProvider router={router} />
  );
  // return (
  //   <div className="App">
  //     <Tile />
  //     <TileSet />
  //   </div>
  // );
}

export default App;
