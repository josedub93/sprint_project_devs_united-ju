import React from 'react';
import "../Styles/styles.css";
import { Context } from "../AppContext/AppContext";
import trash from "../Icons/trash.svg"
import { useNavigate } from "react-router-dom";

function UserTweets() {
    const { user, tweet, tweets, deleteTweetPopUp, showLike } = Context();
            return(
                 
                <div className="tweet-cont flex">  

                
                {tweets.map((tweet) => {                                 
                      
                    return (   
                                
                            <div  key={tweet.id}>
                                <div>
                                   <img src={tweet.photoURL} alt="profile pic"/>
                                </div>
                                <div > 
                                    <div>                       
                                        <p className="tweet-autor">{tweet.autor}</p>       
                                        <span>  -fecha.</span>
                                    </div>
                                
                                    {tweet.uid === user.uid ?
                                        <span onClick={() => deleteTweetPopUp(tweet.id)}>
                                           <img src={trash} alt="delete" />
                                        </span> : null
                                    }
                            
                                    <div>
                                        <p>{tweet.tweet}</p>
                                    </div>
                                    <div>
                                    {showLike(tweet, user)}
                                    <p className="email-text">{tweet.email}</p>
                                    </div>
                                </div>
                            </div> 
                        );
                })
            }
            
              
            </div>
            )

            }
            

export default UserTweets;