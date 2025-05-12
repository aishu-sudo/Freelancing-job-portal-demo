const mainContent = document.getElementById("mainContent");

function loadSection(section) {
    document.querySelectorAll('.sidebar button').forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById(section + "Btn");
    if (activeBtn) activeBtn.classList.add("active");

    switch (section) {
        case "jobBrowsing":
            mainContent.innerHTML = `<iframe src="browse-jobs.html"></iframe>`;
            break;

        case "applyJob":
            mainContent.innerHTML = `<iframe src="apply-job.html"></iframe>`;
            break;

        case "messages":
            mainContent.innerHTML = `<iframe src="messages.html"></iframe>`;
            break;

        case "filterBySkill":
            mainContent.innerHTML = `<iframe src="filter-by-skill.html"></iframe>`;
            break;

        case "filterByLanguage":
            mainContent.innerHTML = `<iframe src="filter-by-language.html"></iframe>`;
            break;

        case "topRated":
            mainContent.innerHTML = `<iframe src="top-rated-jobs.html"></iframe>`;
            break;

        case "profile":
            mainContent.innerHTML = `<iframe src="freelancer-profile.html"></iframe>`;
            break;

        default:
            mainContent.innerHTML = "<h2>Unknown Section</h2>";
    }

    function loadSection(section) {
        // Reset active buttons
        document.querySelectorAll('.sidebar button').forEach(btn => btn.classList.remove('active'));

        // Highlight active
        document.getElementById(section + 'Btn').classList.add('active');

        // Load content (You may load iframe, or inner HTML dynamically)
        document.getElementById('mainContent').innerHTML = `<iframe src="resources/pages/${section}.html"></iframe>`;
    }

    function logout() {
        // Add logout logic here (clear auth tokens, redirect, etc.)
        alert("Logging out...");
        window.location.href = "login.html";
    }

    window.onload = function() {
        loadSection('dashboard');
    };
}

// Load default
loadSection("jobBrowsing");