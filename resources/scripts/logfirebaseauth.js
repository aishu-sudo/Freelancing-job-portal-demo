import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// ✅ Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHnWBiNmUopOeesoJOSRQHQScjYs1x7IY",
    authDomain: "freelancing-job-portal-5c934.firebaseapp.com",
    projectId: "freelancing-job-portal-5c934",
    storageBucket: "freelancing-job-portal-5c934.appspot.com", // ✅ Fixed storage bucket
    messagingSenderId: "200719808260",
    appId: "1:200719808260:web:880064864436ff27f3c251"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Get Elements
const loginForm = document.getElementById("login-form");
const logoutBtn = document.getElementById("logout");
const messageElement = document.getElementById("message");
const forgotPasswordBtn = document.getElementById("forgot-password");

// ✅ Login Event Listener
if (loginForm) {
    loginForm.addEventListener("submit", async(event) => {
        event.preventDefault();

        const email = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value;

        if (!email || !password) {
            showMessage("❌ Please fill in all fields!", "error");
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("✅ User Logged In:", userCredential.user);

            showMessage("✅ Login Successful! Redirecting...", "success");

            // Redirect to dashboard after 2 seconds
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 2000);

        } catch (error) {
            console.error("❌ Login Error:", error.code, error.message);
            if (error.code === "auth/wrong-password") {
                showMessage("❌ Incorrect password!", "error");
            } else if (error.code === "auth/user-not-found") {
                showMessage("❌ User does not exist!", "error");
            } else {
                showMessage("❌ Unable to log in", "error");
            }
        }
    });
}

// ✅ Logout Event Listener
if (logoutBtn) {
    logoutBtn.addEventListener("click", async() => {
        try {
            await signOut(auth);
            console.log("✅ User Logged Out");

            showMessage("✅ Logged out successfully!", "success");

            // Redirect to login page after logout
            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
        } catch (error) {
            console.error("❌ Logout Error:", error.message);
            showMessage("❌ Error logging out", "error");
        }
    });
}

// ✅ Forgot Password Function
const ForgotPassword = () => {
    const email = document.getElementById("login-email").value.trim();

    if (!email) {
        alert("❌ Please enter your email address!");
        return;
    }

    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("✅ A password reset link has been sent to your email.");
        })
        .catch((error) => {
            console.error("❌ Forgot Password Error:", error.code, error.message);
            alert(`❌ Error: ${error.message}`);
        });
};

// ✅ Attach Forgot Password Event Listener
if (forgotPasswordBtn) {
    forgotPasswordBtn.addEventListener("click", ForgotPassword);
}

// ✅ Check Login State & Redirect
onAuthStateChanged(auth, (user) => {
    console.log("🔄 Checking Auth State. User:", user);

    if (window.location.pathname.includes("dashboard.html")) {
        if (!user) {
            console.log("🔴 No User Found! Redirecting to login.");
            window.location.href = "login.html";
        }
    }
});

// ✅ Function to Show Messages
function showMessage(message, type) {
    if (!messageElement) return;

    messageElement.innerText = message;
    messageElement.style.color = type === "success" ? "green" : "red";
    messageElement.style.display = "block";

    setTimeout(() => {
        messageElement.style.display = "none";
    }, 5000);
}