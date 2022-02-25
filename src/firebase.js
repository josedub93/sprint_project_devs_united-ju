import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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
//modulo de autenticacion
export const auth = firebase.auth();
//provedor de autenticacion
export const provider = new firebase.auth.GoogleAuthProvider();
//utilidad para haer el login en pop-up
export const loginWithGoogle = () => auth.signInWithPopup(provider);
//utilidad para hacer logout
export const logout = () => auth.signOut();
// exporta el paquete de firebase para poder usarlo
export default firebase