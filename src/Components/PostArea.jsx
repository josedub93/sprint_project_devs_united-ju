import React, { useState } from 'react';
import "../Styles/styles.css";
import { Context } from "../AppContext/AppContext";

export default function PostArea() {

    const { user, sendTweet, tweet, setTweet } = Context();
    const [characterCount, setCharacterCount] = useState(0);

    const handleChange = (e) => {
        let nuevoTweet = {
            tweet: e.target.value,
            uid: user.uid,
            email: user.email,
            autor: user.displayName,
            photo: user.photoURL,
            likedBy: []
        };
        setTweet(nuevoTweet);
        setCharacterCount(e.target.value.length)
        };


    return (
        <div>
            <h2>PostArea</h2>
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