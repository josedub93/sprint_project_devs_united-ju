import React, { useEffect, useState, createContext, useContext } from 'react';
import { firestore, auth } from "../firebase";


export const AppContext = createContext();

export const Context = () =>{
        const testContext = useContext(AppContext);
        if (!testContext) throw new Error("There is no Auth provider");
        return testContext;
}

export function AppProvider({ children }) {

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
         auth.onAuthStateChanged((user) => {
             setUser(user);
         });
        return () => unsubscribe();
    }, []);


    return (
        <AppContext.Provider
            value={{ user, setUser, tweet, setTweet, tweets, setTweets }}>
            {children}
        </AppContext.Provider>
    );
}