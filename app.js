```js
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

console.log("Firebase Connected Successfully");


// NOTIFICATIONS

async function loadNotifications() {

  const querySnapshot = await getDocs(collection(db, "notifications"));

  let html = "";

  querySnapshot.forEach((doc) => {

    const data = doc.data();

    html += `
      <li>

        <span class="new-tag">
          NEW
        </span>

        <a href="/${data.slug}" target="_blank">
          ${data.title}
        </a>

        <span class="date">
          ${data.date || "NEW"}
        </span>

      </li>
    `;

  });

  document.getElementById("notifications-data").innerHTML = html;

}


// RESULTS

async function loadResults() {

  const querySnapshot = await getDocs(collection(db, "results"));

  let html = "";

  querySnapshot.forEach((doc) => {

    const data = doc.data();

    html += `
      <li>

        <a href="/${data.slug}" target="_blank">
          ${data.title}
        </a>

      </li>
    `;

  });

  document.getElementById("results-data").innerHTML = html;

}


// ADMIT CARDS

async function loadAdmitCards() {

  const querySnapshot = await getDocs(collection(db, "admitcards"));

  let html = "";

  querySnapshot.forEach((doc) => {

    const data = doc.data();

    html += `
      <li>

        <a href="/${data.slug}" target="_blank">
          ${data.title}
        </a>

      </li>
    `;

  });

  document.getElementById("admitcards-data").innerHTML = html;

}


// JOBS

async function loadJobs() {

  const querySnapshot = await getDocs(collection(db, "jobs"));

  let html = "";

  querySnapshot.forEach((doc) => {

    const data = doc.data();

    html += `
      <li>

        <a href="/${data.slug}" target="_blank">
          ${data.title}
        </a>

      </li>
    `;

  });

  document.getElementById("jobs-data").innerHTML = html;

}


// ADMISSIONS

async function loadAdmissions() {

  const querySnapshot = await getDocs(collection(db, "admissions"));

  let html = "";

  querySnapshot.forEach((doc) => {

    const data = doc.data();

    html += `
      <li>

        <a href="/${data.slug}" target="_blank">
          ${data.title}
        </a>

      </li>
    `;

  });

  document.getElementById("admissions-data").innerHTML = html;

}


// COMING SOON

async function loadComingSoon() {

  const querySnapshot = await getDocs(collection(db, "comingsoon"));

  let html = "";

  querySnapshot.forEach((doc) => {

    const data = doc.data();

    html += `

      <div class="coming-box">

        <div class="coming-date">
          ${data.date || ""}
        </div>

        <div class="coming-title">
          ${data.title}
        </div>

      </div>

    `;

  });

  document.getElementById("comingsoon-data").innerHTML = html;

}


// LOAD ALL DATA

loadNotifications();

loadResults();

loadAdmitCards();

loadJobs();

loadAdmissions();

loadComingSoon();
```
