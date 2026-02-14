import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJm5Om9f2b7f9L85yIREEu6YugO-_Zxak",
  authDomain: "slayerbound-codes.firebaseapp.com",
  databaseURL: "https://slayerbound-codes-default-rtdb.firebaseio.com",
  projectId: "slayerbound-codes",
  storageBucket: "slayerbound-codes.firebasestorage.app",
  messagingSenderId: "433381473251",
  appId: "1:433381473251:web:fff06e842e4be03b597ed6",
  measurementId: "G-TCJ9NRW6HF"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const container = document.getElementById("codesContainer");

onValue(ref(db, "codes"), (snapshot) => {
  const data = snapshot.val();
  container.innerHTML = "";

  if (!data) return;

  Object.values(data).forEach(item => {
    if (item.active) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="code-card">
          <h3>${item.code}</h3>
          <p>${item.reward}</p>
        </div>
      `;
      container.appendChild(div);
    }
  });
});
