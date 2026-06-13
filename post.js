import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyAVCaIQrcF0z4SvxMY_aZZL57KkSqFqRQM",

  authDomain: "student-alert-desk.firebaseapp.com",

  projectId: "student-alert-desk",

  storageBucket: "student-alert-desk.firebasestorage.app",

  messagingSenderId: "104180713565",

  appId: "1:104180713565:web:ae431ec36ea5b3f32f65b4"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const urlParams = new URLSearchParams(window.location.search);

const slug = urlParams.get("slug");

async function loadPost() {

  const collections = [
    "jobs",
    "results",
    "admitcards",
    "admissions",
    "notifications"
  ];

  for(const col of collections){

    const querySnapshot = await getDocs(collection(db, col));

    querySnapshot.forEach((doc)=>{

      const data = doc.data();

      if(data.slug === slug){

        document.getElementById("postData").innerHTML = `

          <h1 class="post-title">
            ${data.title}
          </h1>

          <div class="post-date">
            ${data.date}
          </div>

          <div class="post-content">
            ${data.content}
          </div>

        `;

      }

    });

  }

}

loadPost();