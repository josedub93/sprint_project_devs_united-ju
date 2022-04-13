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
        pickedColor: ""
    });
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            const { displayName, email, photoURL, uid } = user;
            setUser({ displayName, email, photoURL, uid });
        });
    }, []);
    useEffect(() => {
        //Toma la coleccion con nombre tweets de la base de datos
        const unsubscribe = firestore
            .collection("tweets")
            .onSnapshot((snapshot) => {
                const tweets = snapshot.docs.map((doc) => {
                    return {
                        tweet: doc.data().tweet,
                        autor: doc.data().autor,
                        id: doc.id,
                        likes: doc.data().likes,
                        email: doc.data().email,
                        uid: doc.data().uid,
                        date: doc.data().date
                    };
                });
                setTweets(tweets);
            });
        return () => unsubscribe();
    }, []);
    return (
        <AppContext.Provider value={{ user, setUser, tweet, setTweet, tweets, setTweets }}>
            {children}
        </AppContext.Provider>
    )
}