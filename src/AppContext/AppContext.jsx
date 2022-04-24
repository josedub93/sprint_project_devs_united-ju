import React, { useEffect, useState, createContext, useContext } from 'react';
import { firestore, auth, loginWithGoogle } from "../firebase";
import redHeart from "../Icons/red heart.svg"
import whiteHeart from "../Icons/white heart.svg"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

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
                        likes: doc.data().likes || 0,
                        email: doc.data().email,
                        uid: doc.data().uid,
                        date: doc.data().date,
                        photo: doc.data().photo,
                        likedBy: doc.data().likedBy
                    };
                });
                setTweets(tweets);
            });
         auth.onAuthStateChanged((user) => {
             setUser(user);
        });
        return () => unsubscribe();
    }, []);



    const sendTweet = (e) => {
        e.preventDefault();
        // enviamos el tweet a la colección
        let enviarTweet = firestore.collection("tweets").add(tweet);
        // el envio, devuelve una promesa
        //enviarTweet.then((docRef) => {
            // y dentro de esta podemos rescatar una referencia
            // al documento (docRef), cuya información final
            // obtendremos con .get()
         //   return docRef.get();
        //});
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
        
        setTweet({ ...tweet, tweet: "" });
        // });
    };

    //Borrar Tweets
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

//mensaje de confirmacion antes de borrar tweet
    const deleteTweetPopUp = (id) => {
        confirmAlert({
          title: 'Confirm to Delete',
          message: 'Are you sure you want to delete this tweet?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => deleteTweet(id)
            },
            {
              label: 'No',
              onClick: () => {}
            }
          ]
        });
    };    

    //Likes de tweets
    const likeTweet = (tweet, user) => {
        const newLikedBy = [...tweet.likedBy, user.uid];
        // se actualiza tweet en firebase
        firestore.doc(`tweets/${tweet.id}`).update({ likedBy: newLikedBy });
    };

    const dislikeTweet = (tweet, user) => {
        const dislikedBy = tweet.likedBy.filter(
            (userUid) => user.uid !== userUid
        );

        // se actualiza tweet en firebase
        firestore.doc(`tweets/${tweet.id}`).update({ likedBy: dislikedBy });
    };

    const showLike = (tweet, user) => {
        if (tweet.likedBy && user) {
            const liked = tweet.likedBy.findIndex(
                (userLike) => user.uid === userLike
            );

            // no le han dado like
            if (liked < 0) {
                return (
                    <>
                        <span onClick={() => likeTweet(tweet, user)}>
                            <img height="12px" src={whiteHeart} alt="" />
                            <p> {tweet.likedBy.length}</p>
                        </span>
                    </>
                );
            } else {
                //ya se le dio like
                return (
                    <>
                        <span onClick={() => dislikeTweet(tweet, user)} >
                            <img height="12px" src={redHeart} alt="" />
                            <p> {tweet.likedBy.length}</p>
                        </span>
                    </>
                );
            }
        }
    };


   

    return (
        <AppContext.Provider
            value={{ user, setUser, tweet, setTweet, tweets, setTweets, sendTweet, deleteTweetPopUp, showLike }}>
            {children}
        </AppContext.Provider>
    );
}