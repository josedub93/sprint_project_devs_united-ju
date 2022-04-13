import React from 'react';
import './Styles/styles.css';
import { Routes ,Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import Profile from './Pages/Profile';


function App() {  
  return (
    <div className="App">
      <Routes>
         <Route exact path='/' element={<Home/>} />
         <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/Profile' element={<Profile/>} />
        </Routes>
  </div>
  );
}

export default App;