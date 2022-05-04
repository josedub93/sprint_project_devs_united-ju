import React from "react";
import smallLogo from "../Icons/logo small.svg";
import devsUnited from "../Icons/devs united small.svg";
import logoutBtn from "../Icons/logout.svg";
import { Context } from "../AppContext/AppContext";
import "../Styles/styles.css";
import { logout } from "../firebase"
import { Link } from "react-router-dom";


export default function Header() {

    const { user, setUid, setUidUsername, setUidProfilePic } = Context();

    const handleProfileRoute = (uid, username, profilePic) => {
        setUid(uid);
        setUidUsername(username);
        setUidProfilePic(profilePic);
    };

    return (
        <header className="FeedHeader">
            <Link
                to="/Profile"
                onClick={() => handleProfileRoute(user.uid, user.displayName, user.photoURL)}>
                <img className='user-profile-pic' src={user.photoURL} referrerPolicy="no-referrer" alt="profile pic" />
            </Link>
            <img src={smallLogo} alt="devs united small logo" className="logoHeader" />
            <img src={devsUnited} alt="devs united second logo" className="logoHeader" />
            <img src={logoutBtn} alt="logout" className="logout" onClick={logout} />
        </header>
    )
}