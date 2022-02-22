import './App.css';
import React, { useEffect, useState } from 'react';
import {firestore} from "./firebase"

function App() {
  
  const [tweets, setTweets] = useState([]);
  const [tweet, setTweet] = useState({
    tweet: "",
    autor: ""
  });

  useEffect(() => {
    //Toma la coleccion con nombre tweets de la base de datos
    firestore
      .collection("tweets")
      .get()
      .then((snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          return {
            tweet: doc.data().tweet,
            autor: doc.data().autor,
            id: doc.id
          };
        });
        setTweets(tweets);
      });
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
        id: doc.id
      };
      // el cual añadiremos en la lista del estado
      setTweets([nuevoTweet, ...tweets]);
    });
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
            <h1>{tweet.tweet}</h1>
            <h4>por: {tweet.autor}</h4>
            </div>
        );
      })}
    </div>
  );
}

export default App;
