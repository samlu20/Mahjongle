import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Dashboard from '../components/Dashboard';
import SiteHeader from '../core/SiteHeader';
import Tile from '../tiles/tileSelector';
import TileSet from '../common/tileSet';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
  ]);

  return (
    <div className='App'>
      <SiteHeader />
      <div className='App-content'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
  // return (
  //   <div className="App">
  //     <Tile />
  //     <TileSet />
  //   </div>
  // );
}

export default App;
