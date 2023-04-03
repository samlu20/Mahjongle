import React from 'react';

import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Dashboard from '../components/Dashboard';
import HandBuilder from '../components/HandBuilder';
import SiteHeader from '../core/SiteHeader';
import Tile from '../tiles/tileSelector'
import TileLibrary from '../components/TileLibrary';
import TileSet from '../common/TileSet';


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
      { path: '/tile-library', element: <TileLibrary /> },
      { path: '/add-hand', element: <HandBuilder /> },
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
