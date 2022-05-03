import React from 'react';
import "../Styles/styles.css";
import { Context } from "../AppContext/AppContext";
import trash from "../Icons/trash.svg"
import { useNavigate } from "react-router-dom";

export default function Feed() {

     const { user, tweet, tweets, deleteTweetPopUp, showLike } = Context();
     let navigate = useNavigate();

     function handleClickToProfile(tweet) {
         if (tweet.userId === user.uid) {
             navigate("/Profile")
         } else if (tweet.userId !== user.uid) {
             navigate("/Profile")
         }
     };


    return (
        <div >
            {tweets.map((tweet) => {
        

                return (
                    <div className='tweet-container' key={tweet.id}>
                        <div>
                            <img src={tweet.photo} onClick={() => handleClickToProfile(tweet)}  alt="profile pic"/>
                        </div>
                        <div>
                            <div>
                                <p className='tweet-autor' onClick={() => handleClickToProfile(tweet)}>{tweet.autor}</p>
                                <span>  -fecha.</span>
                            </div>
                            {tweet.uid === user.uid ?
                                <span onClick={() => deleteTweetPopUp(tweet.id)}>
                                    <img src={trash} alt="delete" />
                                </span> : null
                            }
                            <div className='tweet'>
                                <p>{tweet.tweet}</p>
                            </div>

                            <div>
                                {showLike(tweet, user)}
                            </div>
                        </div>
                    </div>
                );
            })}

        </div>
    );
}