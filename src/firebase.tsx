import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAqmHgRQLTwc8NZs9anI-vV4vF1k7bvplc",
    authDomain: "homeworkdb-a8d0e.firebaseapp.com",
    projectId: "homeworkdb-a8d0e",
    storageBucket: "homeworkdb-a8d0e.appspot.com",
    messagingSenderId: "290567744854",
    appId: "1:290567744854:web:d438ce5fd9c5509d6c7af7"
  };
  
  export const firebaseApp = initializeApp(firebaseConfig);
  export const auth = getAuth(firebaseApp);