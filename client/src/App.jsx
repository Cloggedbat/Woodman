import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import './App.css';
import Axios from "axios";
import Header from './Components/Header'
import App2 from './Pages/Homepage';
// needs to be moved into pages
import forms from './Components/forms'
import FireMapPage from './Pages/fireDataPage'
import SignUp from './Pages/signUpform'
import logdInUser from './Pages/UserHomepage'
import loginforms from './Pages/loginform'
import { AuthContextProvider } from './context/AuthContext'
function App() {
  // const [userData, setUserData] = useState({
  //   token: undefined,
  //   user: undefined,
  // });

  // useEffect(() => {
  //   const checkLoggedIn = async () => {
  //     let token = localStorage.getItem("auth-token");
  //     if (token === null) {
  //       localStorage.setItem("auth-token", "");
  //       token = "";
  //     }
  //     const tokenRes = await Axios.post(
  //       "http://localhost:5000/users/tokenIsValid",
  //       null,
  //       { headers: { "x-auth-token": token } }
  //     );
  //     if (tokenRes.data) {
  //       const userRes = await Axios.get("http://localhost:5000/users/", {
  //         headers: { "x-auth-token": token },
  //       });
  //       setUserData({
  //         token,
  //         user: userRes.data,
  //       });
  //     }
  //   };

  //   checkLoggedIn();
  // }, []);
  return (

    <AuthContextProvider>
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
    </AuthContextProvider>
  );
}

export default App;
