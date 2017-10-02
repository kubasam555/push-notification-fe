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
  messaging.requestPermission()
  .then(function(){
      console.log('Have permission');
      return messaging.getToken();
  })
  .then(function(token) {
      console.log(token);
  })
  .catch(function(err) {
      console.log(err);
  });

  messaging.onMessage(function(payload) {
      console.log('onMessage: ', payload);
  });