
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDVNP-VLK5RCLBo2nKse07sqeMC9WmquT8",
    authDomain: "chess-x-42b9a.firebaseapp.com",
    projectId: "chess-x-42b9a",
    storageBucket: "chess-x-42b9a.appspot.com",
    messagingSenderId: "766163865738",
    appId: "1:766163865738:web:9d8745958d0f9f7dbf5d73",
    measurementId: "G-GP1TWKLWVE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
