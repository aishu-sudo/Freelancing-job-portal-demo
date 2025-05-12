// signup.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyD8RTED-Pc532DVq0JtL-s-85Tx7OCZXCQ",
    authDomain: "freelancing-job-portal-60da1.firebaseapp.com",
    projectId: "freelancing-job-portal-60da1",
    storageBucket: "freelancing-job-portal-60da1.appspot.com", // ✅ FIXED .app to .appspot.com
    messagingSenderId: "300920992917",
    appId: "1:300920992917:web:8980b888330e4af189579c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Elements
const freelancerBtn = document.getElementById("submitSignUpFreelancer");
const clientBtn = document.getElementById("submitSignUpClient");

freelancerBtn ? .addEventListener("click", (e) => signUp(e, "freelancer"));
clientBtn ? .addEventListener("click", (e) => signUp(e, "client"));


async function signUp(event, userType) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!firstName || !lastName || !email || !password) {
        showMessage("❌ All fields are required!", "signUpMessage");
        return;
    }

    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", user.uid), {
            firstName,
            lastName,
            email,
            userType: userType.toLowerCase()
        });

        showMessage("✅ Account Created Successfully!", "signUpMessage");
        document.getElementById("signupForm").reset();
    } catch (error) {
        console.error("Signup Error:", error.message);
        const msg =
            error.code === "auth/email-already-in-use" ?
            "❌ Email already in use!" :
            "❌ Unable to create user!";
        showMessage(msg, "signUpMessage");
    }
}

function showMessage(message, elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.innerText = message;
    el.style.display = "block";
    setTimeout(() => (el.style.display = "none"), 5000);
}