import React from "react";
import logOut from "../Icons/logout.svg";
import back from "../Icons/back.svg";
import { Context } from "../AppContext/AppContext";
import "../Styles/styles.css";
import {logout} from "../firebase"
import { Navigate } from "react-router-dom";


export default function HeaderProfile()  {

 const { user } = Context();

 function handleBackButton() {        
    <Navigate to="/" />   
}

    return (
        <div>
        <h2>Header Profile</h2>
                   
                    <div>
                        <img src={back} onClick={handleBackButton} alt="Back" />
                        <p> nombre de usuario </p> 
                    </div>
                     <button onClick={logout}>Log Out
                        <img 
                        src={logOut} alt="Log Out" />
                    </button>
                
            
        </div>
    )
}