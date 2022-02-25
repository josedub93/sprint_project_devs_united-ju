import './App.css';
import React, { useEffect, useState } from 'react';
import {firestore, loginWithGoogle, auth, logout} from "./firebase";
import heart from "./svg/heart.svg"

function App() {
  
  const [tweets, setTweets] = useState([]);
  const [tweet, setTweet] = useState({
    tweet: "",
    autor: "",
    uid: "",
    mail:"",
    date: new Date()
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    //Toma la coleccion con nombre tweets de la base de datos
    const unsubscribe = 
    firestore.collection("tweets")
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
      return () => unsubscribe;
  }, []);

  const handleChange = (e) => {
    let nuevoTweet = {
      tweet: e.target.value,
      uid: user.uid,
      email: user.email,
      autor: user.displayName
    };
    setTweet(nuevoTweet);
  };

  const sendTweet = (e) => {
    e.preventDefault();
    // enviamos el tweet a la colección
    let enviarTweet = firestore.collection("tweets").add(tweet);
    // el envio, devuelve una promesa
    let solicitarDocumento = enviarTweet.then((docRef) => {
      // y dentro de esta podemos rescatar una referencia
      // al documento (docRef), cuya información final
      // obtendremos con .get()
      return docRef.get();
    });
    // docRef.get() devuelve una promesa
    solicitarDocumento.then((doc) => {
      // y dentro de esta, podemos rescatar la información
      // del documento
      let nuevoTweet = {
        tweet: doc.data().tweet,
        autor: doc.data().autor,
        id: doc.id
      };
      // el cual añadiremos en la lista del estado
      setTweets([nuevoTweet, ...tweets]);
    });
  };

const deleteTweet = (id) => {
  //se borra el tweet del estado
  const nuevosTweets = tweets.filter((tweet) =>{
    return tweet.id !== id;
  });

//actualizamos listado de tweets
setTweets(nuevosTweets);

//Se borra el tweet en firebase
firestore.doc(`tweets/${id}`).delete();
};

 const likeTweet = (id, likes) => {
   if (!likes) likes = 0;
   firestore.doc(`tweets/${id}`).update({likes: likes + 1});
 };
  return (
    <div className="App">
      {user ? (
        <>
        <div>
          <img src={user.photoURL} alt="photo" />
          <p>Hola {user.displayName}</p>
          <button onClick={logout}> Log Out</button>
        </div>
        </>
      ) : (
        <button onClick={loginWithGoogle}>Login con google</button>
      )}
     <form>
     <textarea
          name="tweet"
          onChange={handleChange}
          value={tweet.tweet}
          cols="30"
          rows="5"
          placeholder="escribe un tweet..."
        />
        <div>
          {/* <input
            name="autor"
            onChange={handleChange}
            value={tweet.autor}
            type="text"
            placeholder="persona autora"
          /> */}
          <button onClick={sendTweet}>Enviar tweet</button>
        </div>
     </form>
      <h1>Tweets:</h1>
      {tweets.map((tweet) => {
        return (
          <div key={tweet.id}>
            <p>{tweet.tweet}
            <i className="fas fa-trash" onClick={() => deleteTweet(tweet.id)}></i>
            </p>
            <p>por: {tweet.autor}</p>
            <p>{tweet.email}</p>
            {/* <i class="fa-solid fa-heart-half"></i> */}
           <span><span onClick={() => likeTweet(tweet.id, tweet.likes)}><img src={heart} alt="corazon" height="15px" /></span>{tweet.likes ? tweet.likes : 0}</span>
            </div>
        );
      })}
    </div>
  );
}

export default App;
