import React from "react";
import logOut from "../Icons/logout.svg";
import back from "../Icons/back.svg";
import { Context } from "../AppContext/AppContext";
import "../Styles/styles.css";
import { logout } from "../firebase"
import { useNavigate } from "react-router-dom";


export default function HeaderProfile() {

    const { user } = Context();
    let navigate = useNavigate();

    function handleBackButton() {
        navigate("/")
    }

    return (
        <div className="FeedHeader">
            <div className="flex">
            <img src={back} onClick={handleBackButton} className="backBttn" alt="Back" />
            <p className="headerUserName"> {user.displayName}</p>
            </div>
            <img src={logOut} className="logout" onClick={logout} alt="Log Out" />
            </div>
    )
}