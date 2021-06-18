import firebase from 'firebase'
require('@firebase/firestore')
 var firebaseConfig = {
    apiKey: "AIzaSyBN53uxlmH2iS2NvKiwxfLP7FX4afxiuCs",
    authDomain: "gift-suggestion-app.firebaseapp.com",
    projectId: "gift-suggestion-app",
    storageBucket: "gift-suggestion-app.appspot.com",
    messagingSenderId: "512256274051",
    appId: "1:512256274051:web:24d4eb2c5eb4f81a5875b6",
    measurementId: "G-0V9GL7ZDYW"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase.firestore()