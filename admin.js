import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
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

// PDF READER

document.getElementById("pdfUpload").addEventListener("change", async function(e){

  const file = e.target.files[0];

  const reader = new FileReader();

  reader.onload = async function(){

    const typedarray = new Uint8Array(this.result);

    const pdf = await pdfjsLib.getDocument(typedarray).promise;

    let fullText = "";

    for(let i = 1; i <= pdf.numPages; i++){

      const page = await pdf.getPage(i);

      const textContent = await page.getTextContent();

      const textItems = textContent.items.map(item => item.str);

      fullText += textItems.join(" ");

    }

    document.getElementById("content").value = fullText;

  };

  reader.readAsArrayBuffer(file);

});

// PUBLISH POST

window.publishPost = async function(){

  const category = document.getElementById("category").value;

  const title = document.getElementById("title").value;

  const slug = document.getElementById("slug").value;

  const date = document.getElementById("date").value;

  const content = document.getElementById("content").value;

  await addDoc(collection(db, category), {

    title,
    slug,
    date,
    content

  });

  alert("Post Published Successfully");

}