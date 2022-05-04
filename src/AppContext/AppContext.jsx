import React, { useEffect, useState, createContext, useContext } from 'react';
import { firestore, auth } from "../firebase";
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
        email: "",
        likes: 0,
        date: "",
        photoURL: "",
      
    });
    const [user, setUser] = useState(null);
    const [pending, setPending] = useState(true);
    const [characterCount, setCharacterCount] = useState(0);
    const [uid, setUid] = useState("");
    const [posts, setPosts] = useState(true);
    const [favorites, setFavorites] = useState(false);
    const [uidUsername, setUidUsername] = useState("");
    const [uidProfilePic, setUidProfilePic] = useState("");
   
    useEffect(() => {
        //Toma la coleccion con nombre tweets de la base de datos
        const unsubscribe = firestore
            .collection("tweets")
            .orderBy('date', "desc")
            .onSnapshot((snapshot) => {
                const tweets = snapshot.docs.map((doc) => {
                    return {
                        tweet: doc.data().tweet,
                        autor: doc.data().autor,
                        id: doc.id,
                        likes: doc.data().likes ,
                        email: doc.data().email,
                        uid: doc.data().uid,
                        date: doc.data().date,
                        photo: doc.data().photo,
                        likedBy: doc.data().likedBy,
                
                    };
                });
                setTweets(tweets);
            });
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setPending(false);
        });
        return () => unsubscribe();
    }, []);

    if (pending) {
        return <>Loading...</>
    }

    const sendTweet = (e) => {
        e.preventDefault();
        // enviamos el tweet a la colección
        let enviarTweet = firestore.collection("tweets").add(tweet);
        setTweet({ ...tweet, tweet: "" });
        setCharacterCount(0)
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
                    onClick: () => { }
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
                        <span onClick={() => likeTweet(tweet, user)}  className="dislikes">
                            <img height="12px" src={whiteHeart} alt="" />
                            <p> {tweet.likedBy.length}</p>
                        </span>
                    </>
                );
            } else {
                //ya se le dio like
                return (
                    <>
                        <span onClick={() => dislikeTweet(tweet, user)} className="likes">
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
            value={{ user, setUser, tweet, setTweet, tweets, setTweets, sendTweet, deleteTweetPopUp, showLike, characterCount, setCharacterCount, posts, setPosts, uid, setUid, favorites, setFavorites, uidUsername, setUidUsername, uidProfilePic, setUidProfilePic }}>
            {children}
        </AppContext.Provider>
    );
}