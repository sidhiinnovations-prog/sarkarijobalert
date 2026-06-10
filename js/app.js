const firebaseConfig = {
  apiKey: "AIzaSyAVCaIQrcF0z4SvxMY_aZZL57KkSqFqRQM",
  authDomain: "student-alert-desk.firebaseapp.com",
  projectId: "student-alert-desk",
  storageBucket: "student-alert-desk.firebasestorage.app",
  messagingSenderId: "104180713565",
  appId: "1:104180713565:web:ae431ec36ea5b3f32f65b4"
};

// INITIALIZE FIREBASE

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

console.log("Firebase Connected Successfully");