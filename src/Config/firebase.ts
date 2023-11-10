import { initializeApp } from 'firebase/app';
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyD9GHJDMIuJg2sbpTlPKNMwyitmzxMYxcA",
    authDomain: "bkbooking-ab401.firebaseapp.com",
    projectId: "bkbooking-ab401",
    storageBucket: "bkbooking-ab401.appspot.com",
    messagingSenderId: "1005784894702",
    appId: "1:1005784894702:web:3920bb1309c8c7e04a77ff",
    measurementId: "G-NKD2NNPBE6"
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