import React from 'react';
import "../Styles/styles.css";
import {Context } from "../AppContext/AppContext";
import redHeart from "../Icons/red heart.svg"

export default function Feed() {

    const { tweet, tweets, deleteTweet, likeTweet } = Context();

    return (
        <div>
            <h2>Feed</h2>
            <h1>Tweets:</h1>
            {tweets.map((tweet) => {
                return (
                    <div className='tweet-container'>
                        <div className='tweet' key={tweet.id}>
                            <div className='tweet-info'>
                                <p>{tweet.tweet}</p>
                                <p className='tweet-autor'>por: {tweet.autor}</p>
                                <p className='tweet-autor'>{tweet.email}</p>
                            </div>
                            <div className='acciones'>
                                <i className="fas fa-trash" onClick={() => deleteTweet(tweet.id)}></i>
                                {/* <i class="fa-solid fa-heart-half"></i> */}
                                <span><span onClick={() => likeTweet(tweet.id, tweet.likes)}><img src={redHeart} alt="corazon" height="15px" /></span>{tweet.likes ? tweet.likes : 0}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}