import React from "react";
import smallLogo from "../Icons/logo small.svg";
import devsUnited from "../Icons/devs united small.svg";
import { Context } from "../AppContext/AppContext";
import "../Styles/styles.css";
import {logout} from "../firebase"


export default function Header()  {

 const { user } = Context();


    return (
        <div>
        <h2>Header</h2>
        <img src={smallLogo} alt="" />
        <img src={devsUnited} alt="" />
        <div className='user-profile'>
        <img className='user-profile-pic' src={user.photoURL}  alt="photo" />
        </div>
        <button onClick={logout}> Log Out</button>
        </div>
    )
}