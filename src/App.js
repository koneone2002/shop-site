import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Registration from './pages/register/Registration';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
      //console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={Registration} />
        </Switch>
      </div>
    );
  }
}

export default App;
