import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// components
import Users from './components/Users';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>This is the homepage</h1>
      <Switch>
        <Route path="/users/:id" component={UserProfile} />
        <Route path="/" component={Users} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
