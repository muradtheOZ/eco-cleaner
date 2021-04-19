import React, { useContext } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../resources/images/logo.png'
import google from '../../../resources/images/google.png'

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  // Handle Google Sign-In
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <section>
      <div class="container">
                <div class="head-logo my-5">
                    <Link to="/"><img src={logo} alt=""/></Link>
                </div>

                <div class="row">
                    <div class="col-md-3">

                    </div>

                    <div class="col-md-6">
                        <div class="login-form">
                            <h3 class="mb-3">Login With</h3>
                            <div class="login-alternative">
                                <button onClick={handleGoogleSignIn}><img src={google} alt=""/>Continue with Google</button>
                            </div>
                            <p>Don't have an account? <Link to="/">Create an Account</Link></p>
                        </div>
                    </div>

                    <div class="col-md-3">

                    </div>
                </div>
            </div>
    </section>
  );
};

export default Login;