import { initializeApp } from 'firebase/app';
import firebaseConfig from '../configs/firebase';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";


initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const signInWithGoogle = function () {
    return signInWithPopup(auth, provider)
}
export const signOutAction = function (){
    return signOut(auth)
}