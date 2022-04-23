import React, { useEffect, useState, createContext, useContext } from 'react';
import { firestore, auth, loginWithGoogle } from "../firebase";


export const AppContext = createContext();

export const Context = () => {
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

    // useEffect(() => {
    //     auth.onAuthStateChanged((user) => {
    //       const { displayName, email, photoURL, uid } = user;
    //       setUser({ displayName, email, photoURL, uid });
    //     });
    //   }, []);

    const sendTweet = (e) => {
        e.preventDefault();
        // enviamos el tweet a la colección
        let enviarTweet = firestore.collection("tweets").add(tweet);
        // el envio, devuelve una promesa
        enviarTweet.then((docRef) => {
            // y dentro de esta podemos rescatar una referencia
            // al documento (docRef), cuya información final
            // obtendremos con .get()
            return docRef.get();
        });
        // docRef.get() devuelve una promesa
        // solicitarDocumento.then((doc) => {

        // y dentro de esta, podemos rescatar la información
        // del documento
        //   let nuevoTweet = {
        //     tweet: doc.data().tweet,
        //     autor: doc.data().autor,
        //     email: doc.data().email,
        //     id: doc.id
        //   };
        //   // el cual añadiremos en la lista del estado
        //   setTweets([nuevoTweet, ...tweets]);
        // });
    };


    const deleteTweet = (id) => {
        //se borra el tweet del estado
        const nuevosTweets = tweets.filter((tweet) => {
            return tweet.id !== id;
        });

        //actualizamos listado de tweets
        setTweets(nuevosTweets);

        //Se borra el tweet en firebase
        firestore.doc(`tweets/${id}`).delete();
    };

    const likeTweet = (id, likes) => {
        if (!likes) likes = 0;
        firestore.doc(`tweets/${id}`).update({ likes: likes + 1 });
    };

    return (
        <AppContext.Provider
            value={{ user, setUser, tweet, setTweet, tweets, setTweets, sendTweet, deleteTweet, likeTweet }}>
            {children}
        </AppContext.Provider>
    );
}