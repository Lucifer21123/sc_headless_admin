import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Mainpage from './pages/MainPage';
import Dashboard from './pages/Dashboard';
import "tailwindcss/tailwind.css"
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"component={Dashboard} />
        <Route path="/home"component={Mainpage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;