importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyCCE8NmMAhtRVm1Wbf6tGUCoeD7r0Q8ZIo",
    authDomain: "prezentacjaapp.firebaseapp.com",
    databaseURL: "https://prezentacjaapp.firebaseio.com",
    projectId: "prezentacjaapp",
    storageBucket: "prezentacjaapp.appspot.com",
    messagingSenderId: "936507008821"
  };
  firebase.initializeApp(config);

  const messaging = firebase.messaging();

  messaging.setBackgroundMessageHandler(function(payload) {
    const options = {
        body: payload.data.status
    }
    return self.registration.showNotification(title, options);
  });