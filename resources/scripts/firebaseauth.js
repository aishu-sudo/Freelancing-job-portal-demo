import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// 🔹 Firebase Config (Fixed Storage Bucket)
const firebaseConfig = {
    apiKey: "AIzaSyCHnWBiNmUopOeesoJOSRQHQScjYs1x7IY",
    authDomain: "freelancing-job-portal-5c934.firebaseapp.com",
    projectId: "freelancing-job-portal-5c934",
    storageBucket: "freelancing-job-portal-5c934.appspot.com", // ✅ FIXED
    messagingSenderId: "200719808260",
    appId: "1:200719808260:web:880064864436ff27f3c251"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 🔹 Get buttons
const freelancerBtn = document.getElementById('submitSignUpFreelancer');
const clientBtn = document.getElementById('submitSignUpClient');

// 🔹 Add event listeners
freelancerBtn.addEventListener('click', (event) => signUp(event, "Freelancer"));
clientBtn.addEventListener('click', (event) => signUp(event, "Client"));

// 🔹 Sign Up Function
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
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // 🔹 Store user data in Firestore
        await setDoc(doc(db, "users", user.uid), {
            firstName,
            lastName,
            email,
            userType
        });

        showMessage("✅ Account Created Successfully!", "signUpMessage");

        // 🔹 Clear form fields after successful signup
        document.getElementById("signupForm").reset();

    } catch (error) {
        console.error("Signup Error:", error.message);
        if (error.code === "auth/email-already-in-use") {
            showMessage("❌ Email Address Already Exists!", "signUpMessage");
        } else {
            showMessage("❌ Unable to create user", "signUpMessage");
        }
    }
}

// 🔹 Function to show messages
function showMessage(message, elementId) {
    const messageElement = document.getElementById(elementId);
    if (messageElement) {
        messageElement.innerText = message;
        messageElement.style.display = "block";

        setTimeout(() => {
            messageElement.style.display = "none";
        }, 5000);
    }
}