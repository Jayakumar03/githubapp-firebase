import React, { useState } from 'react';
import './App.css';


import "bootstrap/dist/css/bootstrap.min.css"

/* REACT ROUTER */
import { Routes, Route, Link, BrowserRouter as Router} from "react-router-dom";

/* react toastify */
import "react-toastify/dist/ReactToastify.min.css";

/* firebase */
import firebase from "firebase/app";
import "firebase/auth";

/* components */

import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

import { ToastContainer } from 'react-toastify';
import { Context } from './Context/Context';
import Footer from './Layout/Footer';
import Header from "./Layout/Header";






const App = () => {
/* state for user */

const [user, setUser] = useState(null)


  return (
    <Router>
      <ToastContainer/>
      <Header />
     <Context.Provider  value = {{user, setUser}}>
       <Routes>
            <Route path="/" element={ < Home />} />
            <Route path="/signin" element={ < SignIn />} />
            <Route path="/signup" element={ < SignUp />} />
            <Route path="*" element={ < PageNotFound/>} />
       </Routes>
       </Context.Provider>
       <Footer/>
    </Router>
   
  );
}

export default App;
