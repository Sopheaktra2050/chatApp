// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA4XXa11PDUnOZwgGNhvzVMuXZlzAejCCs",
    authDomain: "chat-app-6c7bb.firebaseapp.com",
    databaseURL: "https://chat-app-6c7bb.firebaseio.com",
    projectId: "chat-app-6c7bb",
    storageBucket: "chat-app-6c7bb.appspot.com",
    messagingSenderId: "299677659901",
    appId: "1:299677659901:web:e495bb6d729e9fbdb1c494",
    measurementId: "G-RGNKYMFC3D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});





