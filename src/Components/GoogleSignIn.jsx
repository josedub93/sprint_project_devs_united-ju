 import React, {useContext, useState} from 'react';
 import { AppContext } from "../Context/AppContext";
import { firestore, loginWithGoogle } from "../firebase";
import bigLogo from "../icons/big logo.svg";
import googleSignIn from "../icons/google sign in.svg";

 function GoogleSignIn() {
 
   
        return (
          <div>
            <div>
              <img src={bigLogo} alt="devs united logo"/>
            </div>
            <div>
              <h1 className="title">Welcome!</h1>
              <p className="text">
                The place where developeres from all around the world share thoughts,
                ideas, get inspired and so much more.
              </p>
              <img
                src={googleSignIn}
                alt="google sign in"
                
                onClick={loginWithGoogle}
              />
              <p className="text loginBottom1">
                © 2020 Devs_United - <span className="loginBottom2">BETA</span>
              </p>
            </div>
          </div>
        );
      };
      
      export default GoogleSignIn;