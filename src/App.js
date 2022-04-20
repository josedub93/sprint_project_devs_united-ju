import React from 'react';
import './Styles/styles.css';
import { Routes ,Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import Profile from './Pages/Profile';
import {AppProvider} from "./AppContext/AppContext";


function App() {  
  return (
    <div className="App">
      <AppProvider>
      <Routes>
         <Route exact path='/' element={<Home/>} />
         <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/Profile' element={<Profile/>} />
        </Routes>
        </AppProvider>
  </div>
  );
}

export default App;