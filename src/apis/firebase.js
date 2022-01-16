import { initializeApp } from 'firebase/app'
import firebaseConfig from '../configs/firebase'
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, FacebookAuthProvider  } from "firebase/auth"


initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()
const auth = getAuth()

export const signInWithGoogle = function () {
    return signInWithPopup(auth, googleProvider)
}

export const signInWithFacebook = function (){
    return signInWithPopup(auth, facebookProvider)
}

export const signOutAction = function (){
    return signOut(auth)
}
