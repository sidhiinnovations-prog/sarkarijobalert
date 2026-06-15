// FIREBASE IMPORT
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyAVCaIQrcF0z4SvxMY_aZZL57KkSqFqRQM",
  authDomain: "student-alert-desk.firebaseapp.com",
  projectId: "student-alert-desk",
  storageBucket: "student-alert-desk.firebasestorage.app",
  messagingSenderId: "104180713565",
  appId: "1:104180713565:web:ae431ec36ea5b3f32f65b4"
};

// INIT FIREBASE
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// GET SLUG FROM URL
const slug = window.location.pathname.replace("/", "");

async function loadPost() {

  const querySnapshot = await getDocs(collection(db, "results"));

  querySnapshot.forEach((doc) => {

    const data = doc.data();

    if(data.slug === slug){

      document.getElementById("post-title").innerHTML = data.title;

      document.getElementById("post-content").innerHTML = data.content;

      document.title = data.title;

    }

  });

}

loadPost();