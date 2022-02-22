import './App.css';
import React, { useEffect } from 'react';
import {firestore} from "./firebase"

function App() {

  useEffect(() => {
    firestore
      .collection("tweets")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.data());
        });
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
   
      </header>
    </div>
  );
}

export default App;
