// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Header from './Components/Header'
// import AuthContext from "./context/AuthContext";
// import React, { useContext } from "react";
// import './App.css';
// import App2 from './Pages/Homepage';
// // needs to be moved into pages
// import SignUp from './Pages/signUpform'
// import logdInUser from './Pages/UserHomepage'
// import loginforms from './Pages/loginform'
// import { AuthContextProvider } from './context/AuthContext'

// function cliantRouter() {
//     const { loggedIn } = useContext(AuthContext);

//     return (
//         <BrowserRouter>

//             <Header />
//             <br />
//             <br />
//             <br />
//             <br />

//             <br />

//             <br />
//             <Switch>
//                 <Route exact path='/' component={App2}>
//                     <div>Home</div>
//                 </Route>
//                 {loggedIn === false && (
//                     <>
//                         <Route exact path='/SignUp' component={SignUp} />
//                         <Route exact path='/login' component={loginforms} />


//                     </>
//                 )}
//                 {loggedIn === true && (
//                     <>
//                         <Route exact path='/SignedIn' component={logdInUser} />


//                     </>
//                 )}
//             </Switch>
//         </BrowserRouter >
//     );
// }

// export default cliantRouter;