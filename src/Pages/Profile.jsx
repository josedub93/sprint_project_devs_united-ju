import React from 'react';
import { Context } from "../AppContext/AppContext";
import HeaderProfile from "../Components/HeaderProfile"
import UserTweets from "../Components/UserTweets";
import UserFavorites from "../Components/UserFavorites";
import { Navigate } from "react-router-dom";
import postProfileBtn from "../Icons/posts profile btn.svg";
import fvProfileBtn from "../Icons/favorites profile btn.svg";

function Profile() {
  const { user, posts, setPosts, setFavorites, uidUsername, uidProfilePic } = Context();

  const postsBtnHandler = () => {
    setPosts(true);
    setFavorites(false);
  };

  const favsBtnHandler = () => {
    setPosts(false);
    setFavorites(true);
  };

  return (
    <div>
      {user ? (
        <div>
          <HeaderProfile />
          <div className="ProfileInfo">
            <img src={uidProfilePic} alt="profile pic" className="pictureInfo" referrerPolicy="no-referrer" />

            <h2>{uidUsername}</h2>

            <div className="ProfileInfoBttns">
              {!posts ? (
                <button onClick={postsBtnHandler}>
                  <img src={postProfileBtn} alt="posts profile button" width="300px" />
                </button>
              ) : (
                <button onClick={favsBtnHandler}>
                  <img src={fvProfileBtn} alt="favorites button" width="300px" />
                </button>
              )}
            </div>
          </div>
          {posts ? <UserTweets /> : <UserFavorites />}
        </div>
      ) : (
        <Navigate to="/SignIn" />
      )}
    </div>

  )
}
export default Profile;