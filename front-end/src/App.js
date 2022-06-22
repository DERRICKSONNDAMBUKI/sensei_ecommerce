import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import {Home} from './components/home/Home';
import { Header } from './components/header/Header';
import { Login } from './components/login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={'/login'}>
            <Login/>
          </Route>
          <Route path={'/'} exact>
            <Header/>
            <Home/>
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
