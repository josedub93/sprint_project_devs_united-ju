import React from 'react';
import { Context } from "../AppContext/AppContext";
import HeaderProfile from "../Components/HeaderProfile"
import UserTweets from "../Components/UserTweets";
import UserFavorites from "../Components/UserFavorites";
import { Navigate } from "react-router-dom";

function Profile() {
    const { user, posts } = Context();

    return (
        <div>
            {user ? (
                <div>
                    <HeaderProfile />
                 <div>
                    <img src={user.photoURL} alt="" />
                    <p className='tweet-autor'>{user.email}</p>
                 </div>
                 {posts ?  <UserTweets /> :  <UserFavorites />}
                   </div>
            ) : (
                <Navigate to="/SignIn" />
            )}
        </div>

    )
}
export default Profile;