import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramwork = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            // console.log(res);
            const { displayName, photoURL, email } = res.user;
            // console.log(displayName,email,photoURL);
            const signInUser = {
                isSignIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            }
            setUserToken()
            return signInUser
            // console.log(displayName,email,photoURL);
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
}
const setUserToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
        sessionStorage.setItem('token', idToken)
    }).catch(function (error) {
        // Handle error
    });
}
export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(fbProvider)
        .then((result) => {
            var credential = result.credential;
            var user = result.user;
            user.success = true;
            return user;
            // console.log('Fb User After Sign In', user);
            var accessToken = credential.accessToken;
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
}

export const handleSignOut = () => {

    return firebase.auth().signOut()
        .then(res => {
            const signOutUser = {
                isSignIn: '',
                name: '',
                photo: '',
                password: '',
                email: '',
                success: false
            }
           
            return signOutUser;
            // console.log(res);
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
}





