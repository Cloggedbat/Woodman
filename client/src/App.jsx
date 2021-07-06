import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Components/Header'
import App2 from './Pages/Homepage';
// needs to be moved into pages
import forms from './Components/forms'
import FireMapPage from './Pages/fireDataPage'
import SignUp from './Pages/signUpform'
import logdInUser from './Pages/UserHomepage'
import loginforms from './Pages/loginform'
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
          <Route exact path='/FireDanger' component={FireMapPage} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/SignedIn' component={logdInUser} />
          <Route exact path='/login' component={loginforms} />

        </Switch>

      </div>


    </Router >
  );
}

export default App;
