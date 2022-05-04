import React from 'react';
import "../Styles/styles.css";
import { Context } from "../AppContext/AppContext";
import trash from "../Icons/trash.svg"
import { useNavigate } from "react-router-dom";

export default function Tweets({ tweet, i }) {

    const { user, deleteTweetPopUp, showLike, setUid, setUidUsername, setUidProfilePic } = Context();
    let navigate = useNavigate();

    function handleClickToProfile(tweet) {
        setUid(tweet.uid);
        setUidUsername(tweet.autor);
        setUidProfilePic(tweet.photo);
        if (tweet.uid === user.uid) {
            navigate("/Profile")
        } else {
            navigate("/Profile")
        }
    };
    //fecha de tweet en formato corto
    // const format = (dates, locale, options) =>
    //     new Intl.DateTimeFormat(locale, options).format(dates)
    // let date = tweet.date.toDate()
    // const posted = format(date, 'es', { day: 'numeric', month: 'short' });

    return (
        <div className='tweet-container' key={tweet.id}>
            <div className="tweetPictCont">
                <img src={tweet.photo}  className="TweetPic" onClick={() => handleClickToProfile(tweet)} alt="profile pic" />
            </div>
            <div className='tweetAutIconCont'>
                <div className='tweetAutCont' >
                   
                    <p className='tweet-autor' onClick={() => handleClickToProfile(tweet)}>{tweet.autor}</p>
                    {tweet.uid === user.uid ?
                    <span onClick={() => deleteTweetPopUp(tweet.id)}>
                        <img src={trash} alt="delete" />
                    </span> : null
                }
                    <span>  -fecha.</span>
                </div>
              
                <div className='tweetCont'>
                    <p className='tweet'>{tweet.tweet}</p>
                    <button className='like'>{showLike(tweet, user)}</button>
                </div>
            </div>
        </div>


    );
}