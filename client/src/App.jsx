import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Components/Header'
import App2 from './Pages/Homepage';
import forms from './Components/forms'
import Maps from './Components/map'
function App() {
  return (
    <Router>
      <Header />
      <br />
      <br />
      <br />
      <br />

      <br />

      <br />

      <div className="App">
        <Switch>
          <Route exact path='/' component={App2} />
          <Route exact path='/forms' component={forms} />

        </Switch>

      </div>


    </Router >
  );
}

export default App;
