import React from 'react';
import './styles.css';
import { Switch ,Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import Profile from './Pages/Profile';


function App() {  
  return (
    <div className="App">
      <Switch>
         <Route exact path='/' element={<Home/>} />
         <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/Profile' element={<Profile/>} />
        </Switch>
  </div>
  );
}

export default App;