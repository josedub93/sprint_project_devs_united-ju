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
            <img src={back} onClick={handleBackButton} alt="Back" />
            <p> {user.displayName}</p>
            <img src={logOut} className="logout" onClick={logout} alt="Log Out" />
        </div>
    )
}