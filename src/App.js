import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Switch } from 'react-router-dom';
import Favorites from './components/pages/Favorites';
import AddFav from './components/pages/AddFav';
import EveryOne from './components/pages/EveryOne';

function App() {
  return (
    <div>

      <Switch>
        <Route path='/' exact>

          <EveryOne></EveryOne>
        </Route>
        <Route path='/Favorites'>
          <Favorites></Favorites>
        </Route>
        <Route path='/AddFav'>
          <AddFav></AddFav>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
