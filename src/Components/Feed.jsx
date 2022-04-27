import React from 'react';
import "../Styles/styles.css";
import { Context } from "../AppContext/AppContext";
import trash from "../Icons/trash.svg"
import { Link } from "react-router-dom";

export default function Feed() {

    const { user, tweet, tweets, deleteTweetPopUp, showLike } = Context();

 

    return (
        <div>
            <h2>Feed</h2>
            <h1>Tweets:</h1>
            {tweets.map((tweet) => {
                return (
                    <div className='tweet-container' key="">
                        <div className='tweet' key={tweet.id}>
                        <Link to="/Profile">
                  <img src={tweet.photo} alt="profile pic" />
                  <p className='tweet-autor'>{tweet.autor}</p>
                </Link>
                            <div className='tweet-info'>
                                
                                
                                <p>{tweet.tweet}</p>
                            </div>
                            <div className='acciones'>
                                {tweet.uid === user.uid ?
                                    <span onClick={() => deleteTweetPopUp(tweet.id)}>
                                        <img src={trash} alt="delete" />
                                    </span> : null
                                }
                                {showLike(tweet, user)}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

                