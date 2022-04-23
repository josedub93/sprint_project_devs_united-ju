import React from 'react';
import "../Styles/styles.css";
import {Context } from "../AppContext/AppContext";

export default function PostArea()  {

    const { user,sendTweet, tweet, setTweet } = Context();

    const handleChange = (e) => {
        let nuevoTweet = {
             tweet: e.target.value,
             uid: user.uid,
             email: user.email,
             autor: user.displayName
         };
         setTweet(nuevoTweet);
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
                     placeholder="escribe un tweet..."
                 />
                 <div className='input-group'>

                     <button onClick={sendTweet}>Enviar tweet</button>
                 </div>
             </form>
        </div>
    )
}