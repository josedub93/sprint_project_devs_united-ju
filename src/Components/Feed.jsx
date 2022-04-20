import React, { useEffect, useState } from 'react';
import { firestore, loginWithGoogle, auth, logout } from "../firebase";


export default function Feed() {

        return (
            <h2>Feed</h2>
        )
    
    // const [tweets, setTweets] = useState([]);
    // const [tweet, setTweet] = useState({
    //     tweet: "",
    //     autor: "",
    //     uid: "",
    //     mail: "",
    //     likes:0,
    //     date:""
    // });
    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     //Toma la coleccion con nombre tweets de la base de datos
    //     const unsubscribe = firestore
    //         .collection("tweets")
    //         .onSnapshot((snapshot) => {
    //             const tweets = snapshot.docs.map((doc) => {
    //                 return {
    //                     tweet: doc.data().tweet,
    //                     autor: doc.data().autor,
    //                     id: doc.id,
    //                     likes: doc.data().likes,
    //                     email: doc.data().email,
    //                     uid: doc.data().uid,
    //                     date: doc.data().date
    //                 };
    //             });
    //             setTweets(tweets);
    //         });
    //     auth.onAuthStateChanged((user) => {
    //         setUser(user);
    //     });
    //     return () => unsubscribe();
    // }, []);

    // const handleChange = (e) => {
    //     let nuevoTweet = {
    //         tweet: e.target.value,
    //         uid: user.uid,
    //         email: user.email,
    //         autor: user.displayName
    //     };
    //     setTweet(nuevoTweet);
    // };

    // const sendTweet = (e) => {
    //     e.preventDefault();
    //     // enviamos el tweet a la colección
    //     let enviarTweet = firestore.collection("tweets").add(tweet);
    //     // el envio, devuelve una promesa
    //     enviarTweet.then((docRef) => {
    //         // y dentro de esta podemos rescatar una referencia
    //         // al documento (docRef), cuya información final
    //         // obtendremos con .get()
    //         return docRef.get();
    //     });
    //     // docRef.get() devuelve una promesa
    //     // solicitarDocumento.then((doc) => {

    //     //   // y dentro de esta, podemos rescatar la información
    //     //   // del documento
    //     //   let nuevoTweet = {
    //     //     tweet: doc.data().tweet,
    //     //     autor: doc.data().autor,
    //     //     email: doc.data().email,
    //     //     id: doc.id
    //     //   };
    //     //   // el cual añadiremos en la lista del estado
    //     //   setTweets([nuevoTweet, ...tweets]);
    //     // });
    // };

    // const deleteTweet = (id) => {
    //     //se borra el tweet del estado
    //     const nuevosTweets = tweets.filter((tweet) => {
    //         return tweet.id !== id;
    //     });

    //     //actualizamos listado de tweets
    //     setTweets(nuevosTweets);

    //     //Se borra el tweet en firebase
    //     firestore.doc(`tweets/${id}`).delete();
    // };

    // const likeTweet = (id, likes) => {
    //     if (!likes) likes = 0;
    //     firestore.doc(`tweets/${id}`).update({ likes: likes + 1 });
    // };
    // return (
    //     <div className="App">
    //      {user ? (
    //             <>
    //                 <div className='user-profile'>
    //                     <img className='user-profile-pic' src={user.photoURL} alt="photo" />
    //                     <p>Hola {user.displayName}</p>
    //                     <button onClick={logout}> Log Out</button>
    //                 </div>
    //             </>
    //         ) : (
    //             <button className='login-btn' onClick={loginWithGoogle}>Login con google</button>
    //         )}
    //         <form className='formulario'>
    //             <textarea
    //                 name="tweet"
    //                 onChange={handleChange}
    //                 value={tweet.tweet}
    //                 cols="30"
    //                 rows="5"
    //                 placeholder="escribe un tweet..."
    //             />
    //             <div className='input-group'>

    //                 <button onClick={sendTweet}>Enviar tweet</button>
    //             </div>
    //         </form>
    //         <h1>Tweets:</h1>
    //         {tweets.map((tweet) => {
    //             return (
    //                 <div className='tweet-container'>
    //                     <div className='tweet' key={tweet.id}>
    //                         <div className='tweet-info'>
    //                             <p>{tweet.tweet}</p>
    //                             <p className='tweet-autor'>por: {tweet.autor}</p>
    //                             <p className='tweet-autor'>{tweet.email}</p>
    //                         </div>
    //                         <div className='acciones'>
    //                             <i className="fas fa-trash" onClick={() => deleteTweet(tweet.id)}></i>
    //                             {/* <i class="fa-solid fa-heart-half"></i> */}
    //                             <span><span onClick={() => likeTweet(tweet.id, tweet.likes)}><img src={heart} alt="corazon" height="15px" /></span>{tweet.likes ? tweet.likes : 0}</span>
    //                         </div>
    //                     </div>
    //                 </div>
    //             );
    //         })}
    //     </div>
    // );
}