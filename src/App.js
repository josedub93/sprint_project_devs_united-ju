import './App.css';
import React, { useEffect, useState } from 'react';
import {firestore} from "./firebase";
import heart from "./svg/heart.svg"

function App() {
  
  const [tweets, setTweets] = useState([]);
  const [tweet, setTweet] = useState({
    tweet: "",
    autor: ""
  });

  useEffect(() => {
    //Toma la coleccion con nombre tweets de la base de datos
    const unsubscribe = 
    firestore.collection("tweets")
    .onSnapshot((snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          return {
            tweet: doc.data().tweet,
            autor: doc.data().autor,
            id: doc.id
          };
        });
        setTweets(tweets);
      });
      return () => unsubscribe;
  }, []);

  const handleChange = (e) => {
    let nuevoTweet = {
      ...tweet,
      [e.target.name]: e.target.value
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
        likes: doc.data().likes,
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

 const likeTweet = (id, numLikes) => {
   firestore.doc(`tweets/${id}`).update({likes: numLikes + 1});
 };
  return (
    <div className="App">
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
          <input
            name="autor"
            onChange={handleChange}
            value={tweet.autor}
            type="text"
            placeholder="persona autora"
          />
          <button onClick={sendTweet}>Enviar tweet</button>
        </div>
     </form>
      <h1>Tweets:</h1>
      {tweets.map((tweet) => {
        return (
          <div key={tweet.id}>
            <h1>{tweet.tweet}
            <i className="fas fa-trash" onClick={() => deleteTweet(tweet.id)}></i>
            </h1>
            {/* <i class="fa-solid fa-heart-half"></i> */}
           <span><span onClick={() => likeTweet(tweet.id)}><img src={heart} alt="corazon" height="15px" /></span>4</span>
            <h4>por: {tweet.autor}</h4>
            </div>
        );
      })}
    </div>
  );
}

export default App;
