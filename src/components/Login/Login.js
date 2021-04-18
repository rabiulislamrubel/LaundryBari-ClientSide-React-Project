import React, { useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };

  var provider = new firebase.auth.GoogleAuthProvider();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleSignUp = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setLoggedInUser(result.user);
        history.replace(from);

        setUserToken();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setUserToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  return (
    <div className='login'>
      <div className='inner-login shadow rounded'>
        <div className='mb-3'>
          <label className='form-label'>Email address</label>
          <input
            type='email'
            className='form-control'
            placeholder='name@example.com'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='*******'
          />
        </div>
        <div className='mb-5 text-center'>
          <input type='submit' className='btn btn-primary' value='Login' />
        </div>
        <div className='text-center'>
          <button className='btn' onClick={handleSignUp}>
            <FontAwesomeIcon icon={faGoogle} /> Google SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
