 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
 import { getPerformance } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-performance.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyB-s-E1av-5AefeInoDIeSVTFfQk6JXtbc",
   authDomain: "is-it-raining-nl.firebaseapp.com",
   projectId: "is-it-raining-nl",
   storageBucket: "is-it-raining-nl.appspot.com",
   messagingSenderId: "637832374419",
   appId: "1:637832374419:web:a92c374d2dedf77fc80566",
   measurementId: "G-KWSL7G31WZ",
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const performance = getPerformance(app);

 logEvent(analytics, 'page_loaded', {});