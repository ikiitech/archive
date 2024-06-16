<script type="module">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCW1U7M15HP5Fhd_1u9PxOrdTO6OtNNlk0",
      authDomain: "rifki-web.firebaseapp.com",
      projectId: "rifki-web",
      storageBucket: "rifki-web.appspot.com",
      messagingSenderId: "75339411622",
      appId: "1:75339411622:web:56019ca31fcfe33528c467",
      measurementId: "G-WEHG8Q715R"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  </script>