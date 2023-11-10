# PBL6
# Deploy 
 https://bookingtickets.netlify.app/

package.json
    "@firebase/app": "^0.1.4",
    "expo-firebase-recaptcha": "^2.3.0",
    "firebase": "^4.8.0",

src/Firebase/index.ts
    import firebase from 'firebase'; ----> import firebase from 'firebase/compat/app';

src/Components/modal/signup/firebase.js
    import * as firebase from 'firebase' -----> import * as firebase from 'firebase'



src/Components/modal/signup

