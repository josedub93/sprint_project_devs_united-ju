import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import Profile from './Pages/Profile';


function App() {  
  return (
    <div className="App">
          <Route exact path='/'><Home/></Route>
         <Route path='/signIn'><SignIn/></Route>
        <Route path='/Profile'><Profile/></Route>
  </div>
  );
}

export default App;