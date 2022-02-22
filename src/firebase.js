import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBmxa10Sf_e_v21px-4Scun8lOqWfCEqEw",
    authDomain: "prueba-proyecto-1-bda99.firebaseapp.com",
    projectId: "prueba-proyecto-1-bda99",
    storageBucket: "prueba-proyecto-1-bda99.appspot.com",
    messagingSenderId: "42783460004",
    appId: "1:42783460004:web:7e8c0684f18bc75546b431"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// Exporta la funcionalidad de la DB
export const firestore = firebase.firestore()
// exporta el paquete de firebase para poder usarlo
export default firebase