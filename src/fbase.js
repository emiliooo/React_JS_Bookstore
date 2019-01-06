 import Rebase from "re-base";
 import firebase from "firebase";
 
 
 var firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyB74Ynj3yXGKEZwcTRQ5CsvFH-0N67Bd1U",
    authDomain: "bookstore-3759c.firebaseapp.com",
    databaseURL: "https://bookstore-3759c.firebaseio.com",
    projectId: "bookstore-3759c",
    storageBucket: "bookstore-3759c.appspot.com",
    messagingSenderId: "206509338444"
  });

  const fbase = Rebase.createClass(firebaseApp.database());

  export {fbase,firebaseApp}
