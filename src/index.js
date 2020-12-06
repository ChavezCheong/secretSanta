import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/analytics'
import { createStore, combineReducers } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from 'react-redux-firebase'
import {composeWithDevTools} from 'redux-devtools-extension'

const firebaseConfig = {
  apiKey: "AIzaSyCslprrhYOua5Up3yXzAitqZms5_5yxHws",
  authDomain: "secret-santa-online.firebaseapp.com",
  databaseURL: "https://secret-santa-online-default-rtdb.firebaseio.com",
  projectId: "secret-santa-online",
  storageBucket: "secret-santa-online.appspot.com",
  messagingSenderId: "715849096066",
  appId: "1:715849096066:web:97a5bc8b2c9c777eb0cd9b"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer
  // firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const store = createStore(rootReducer, composeWithDevTools())

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  //createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { firebaseConfig, firebase, storage as default };
