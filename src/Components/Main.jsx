import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import SignIn from '../Pages/SignIn';
import Profile from '../Pages/Profile';

const Main = () => {
    return (
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/signIn' component={SignIn}></Route>
        <Route exact path='/Profile' component={Profile}></Route>
      </Routes>
    );
  }
  
  export default Main;