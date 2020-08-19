import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Registration from './pages/register/Registration';
import Header from './components/header/Header';

import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={Registration} />
      </Switch>
    </div>
  );
}

export default App;
