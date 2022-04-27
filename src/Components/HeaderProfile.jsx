import React from "react";
import back from "../Icons/back.svg";
import { Context } from "../AppContext/AppContext";
import "../Styles/styles.css";
import {logout} from "../firebase"


export default function HeaderProfile()  {

 const { user } = Context();

    return (
        <div>
        <h2>Header Profile</h2>
        <img src={back} alt="" />
        
        <button onClick={logout}> Log Out</button>
        </div>
    )
}