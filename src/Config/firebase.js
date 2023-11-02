import { initializeApp } from 'firebase/app';
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAG9U-BA2yH2TNCGkSB8-TmvxV-1kdD9ZQ",
    authDomain: "elearning-a890f.firebaseapp.com",
    projectId: "elearning-a890f",
    storageBucket: "elearning-a890f.appspot.com",
    messagingSenderId: "876088938835",
    appId: "1:876088938835:web:12c410250db5f5c13511a6"
};

// const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
// const messaging = getMessaging(app);
// // isSupported().then(res => console.log(res))
// getToken(messaging, { vapidKey: 'BMetzYZmOjgkslARs3VCXoyFdM1yA1JdHRmKnthm_F9C-fYfGOMSGdEfSfDyrr6oHlZFZRMx-YBWJL8wdQ3AtAs' }).then((currentToken) => {
//     if (currentToken) {
//         console.log(currentToken);
//       // Send the token to your server and update the UI if necessary
//       // ...
//     } else {
//       // Show permission request UI
//       console.log('No registration token available. Request permission to generate one.');
//       // ...
//     }
//   }).catch((err) => {
//     console.log('An error occurred while retrieving token. ', err);
//     // ...
//   });

// onMessage(messaging, (payload) => {
//     console.log('Message received. ', payload);
//     // ...
// });

// export {
//     messaging
// }

// export default app