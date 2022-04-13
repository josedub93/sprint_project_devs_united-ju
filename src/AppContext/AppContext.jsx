import React, { useEffect, useState, createContext } from 'react';
import { firestore, auth } from "../firebase";


export const AppContext = createContext();

export default function AppProvider({ children }) {

    const [tweets, setTweets] = useState([]);
    const [tweet, setTweet] = useState({
        tweet: "",
        autor: "",
        uid: "",
        mail: "",
        likes: 0,
        date: "",
        pickedColor:""
    });
    const [user, setUser] = useState(null);

    return (
        <AppContext.Provider value={{user, setUser, tweet, setTweet, tweets, setTweets}}>
            {children}
        </AppContext.Provider>
    )
}