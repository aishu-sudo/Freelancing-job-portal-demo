import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCHnWBiNmUopOeesoJOSRQHQScjYs1x7IY",
    authDomain: "freelancing-job-portal-5c934.firebaseapp.com",
    projectId: "freelancing-job-portal-5c934",
    storageBucket: "freelancing-job-portal-5c934.appspot.com",
    messagingSenderId: "200719808260",
    appId: "1:200719808260:web:880064864436ff27f3c251"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Check auth state
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = 'login.html';
    } else {
        loadProjects(user.uid);
    }
});

// Check if project was just posted
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('posted') === 'true') {
    document.getElementById('postedMessage').style.display = 'block';
}

// Post project button
document.getElementById('postProjectBtn').addEventListener('click', () => {
    window.location.href = 'post-project.html';
});

// Load projects
async function loadProjects(userId) {
    try {
        const q = query(collection(db, "projects"), where("clientId", "==", userId));
        const querySnapshot = await getDocs(q);

        const container = document.getElementById('projectsContainer');
        container.innerHTML = '';

        querySnapshot.forEach((doc) => {
            const project = doc.data();
            const projectElement = document.createElement('div');
            projectElement.className = 'project';
            projectElement.innerHTML = `
                <h3>${project.description.split('\n')[0]}</h3>
                <p>${new Date(project.createdAt).toLocaleDateString()}</p>
                <p>Status: ${project.status}</p>
            `;
            container.appendChild(projectElement);
        });
    } catch (error) {
        console.error("Error loading projects:", error);
    }
}