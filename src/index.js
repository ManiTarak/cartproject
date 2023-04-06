import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCe4bpI7MIRN-heK3D9z1FtfN2qw-wxTyM",
  authDomain: "cart-app-d9c12.firebaseapp.com",
  projectId: "cart-app-d9c12",
  storageBucket: "cart-app-d9c12.appspot.com",
  messagingSenderId: "100496702622",
  appId: "1:100496702622:web:d2176a1e7e74d54b1c0f8f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

