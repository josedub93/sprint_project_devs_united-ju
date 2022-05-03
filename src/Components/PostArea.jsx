import React, { useState } from 'react';
import "../Styles/styles.css";
import { Context } from "../AppContext/AppContext";
import { Link } from "react-router-dom";


export default function PostArea() {

    const { user, sendTweet, tweet, setTweet, characterCount, setCharacterCount, setUid, setUidUsername, setUidProfilePic } = Context();

    const handleChange = (e) => {
        let nuevoTweet = {
            tweet: e.target.value,
            uid: user.uid,
            email: user.email,
            autor: user.displayName,
            photo: user.photoURL,
            likedBy: [],
            date: new Date()
        };
        setTweet(nuevoTweet);
        setCharacterCount(e.target.value.length)
    };

    const handleProfileRoute = (uid, username, profilePic) => {
        setUid(uid);
        setUidUsername(username);
        setUidProfilePic(profilePic);
    };


    return (
        <div>
            <h2>PostArea</h2>
            <Link to="/Profile"
                onClick={() =>
                    handleProfileRoute(user.uid, user.displayName, user.photoURL)
                }>
                <img
                    src={user.photoURL}
                    alt="profile pic"

                />

            </Link>
            <form className='formulario'>
                <textarea
                    name="tweet"
                    onChange={handleChange}
                    value={tweet.tweet}
                    cols="30"
                    rows="5"
                    placeholder="What's Happening?"
                    maxLength="200"
                />
                <p>{characterCount}</p>
                <p>200 max.</p>
                <progress id="progress" value={characterCount} max="200"></progress>

                <div className='input-group'>

                    <button onClick={sendTweet}>POST</button>
                </div>
            </form>
        </div>
    )
}