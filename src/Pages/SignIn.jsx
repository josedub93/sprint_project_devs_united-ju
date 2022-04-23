import React, {useState} from 'react'
import { loginWithGoogle } from "../firebase";
import { Context } from "../AppContext/AppContext";
import bigLogo from "../Icons/logo big.svg";
import googleSignIn from "../Icons/google sign in.svg";
import { useNavigate } from 'react-router-dom';

function SignIn() {

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

       return (
         <div>
           <div>
             <img src={bigLogo} alt="devs_united logo"/>
           </div>
           <div>
             <h1>Welcome!</h1>
             <p>
               The place where developeres from all around the world share thoughts,
               ideas, get inspired and so much more.
             </p>
             <img
               src={googleSignIn}
               alt="google sign in"
               
               onClick={handleGoogleSignIn}
             />
             <p>
               © 2020 Devs_United - <span>BETA</span>
             </p>
           </div>
         </div>
       );
     };
     
     export default SignIn;