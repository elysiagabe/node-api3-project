import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
// components
import Users from './components/Users';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route path="/users/:id" component={UserProfile} />
        <Route path="/" component={Users} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
