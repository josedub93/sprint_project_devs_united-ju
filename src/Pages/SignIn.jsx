import React, {useState} from 'react'
import { loginWithGoogle } from "../firebase";
import bigLogo from "../Icons/logo big.svg";
import googleSignIn from "../Icons/google sign in.svg";
import { useNavigate } from 'react-router-dom';



function SignIn() {
  

  const navigate = useNavigate();
  const [error, setError] = useState("");

  
  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };


       return (

           <div className="GoogleLogin">
           <div>
             <img src={bigLogo} alt="devs_united logo" width="400" height="500" />
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
               className="signIn"
               onClick={handleGoogleSignIn}
             />
             <p className="text loginBottom1">
               © 2020 Devs_United - <span className="loginBottom2">BETA</span>
             </p>
           </div>
           </div>

       );
     };
     
     export default SignIn;