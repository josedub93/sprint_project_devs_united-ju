import React from 'react';
import { Context } from "../AppContext/AppContext";
import { Link } from "react-router-dom";
import trash from "../Icons/trash.svg"

const Tweet = ({ tweet, i }) => {
  const {
    user,
    deleteTweetPopUp,
    showLike,
    setUid,
    setUidUsername,
    setUidProfilePic,
  } = Context();

  const handleProfileRoute = (uid, username, profilePic) => {
    setUid(uid);
    setUidUsername(username);
    setUidProfilePic(profilePic);
  };

  return (
    <div className='tweet-container' id={tweet.id} key={i}>
      <div>
        <img src={tweet.photo} alt="profile pic" />
      </div>
      <div>
        <div>
          <p className='tweet-autor' >{tweet.autor}</p>
          {tweet.uid === user.uid ?
            <span onClick={() => deleteTweetPopUp(tweet.id)}>
              <img src={trash} alt="delete" />
            </span> : null
          }
        </div>
        <div className="MessageLike">

          <div className='tweet'>
            <p>{tweet.tweet}</p>
          </div>
          {showLike(tweet, user)}
        </div>
      </div>
    </div>
  )
};

export default Tweet;
