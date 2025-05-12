< !DOCTYPE html >
    <
    html lang = "en" >
    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <
    title > Client Dashboard - Braintel < /title> <
    link rel = "stylesheet"
href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" >
    <
    style >
    *
    {
        box - sizing: border - box;
        margin: 0;
        padding: 0;
        font - family: 'Segoe UI',
        Tahoma,
        Geneva,
        Verdana,
        sans - serif;
    }

body {
    background - color: #f5f5f5;
}

.header {
    background - color: #2c3e50;

            color: white;

            padding: 15px 20px;

            display: flex;

            justify-content: space-between;

            align-items: center;

            box-shadow: 0 2px 5px rgba(0,0,0,0.1);

        }

        

        .logo {

            display: flex;

            align-items: center;

        }

        

        .logo img {

            height: 40px;

            margin-right: 10px;

        }

        

        .logo h1 {

            font-size: 20px;

            font-weight: 600;

        }

        

        .user-actions {

            display: flex;

            align-items: center;

            gap: 20px;

        }

        

        .user-actions a {

            color: white;

            text-decoration: none;

            font-size: 14px;

            display: flex;

            align-items: center;

        }

        

        .user-actions a i {

            margin-right: 5px;

        }

        

        .notification-badge {

            background-color: # e74c3c;
    color: white;
    border - radius: 50 % ;
    width: 18 px;
    height: 18 px;
    font - size: 10 px;
    display: flex;
    align - items: center;
    justify - content: center;
    position: absolute;
    top: -5 px;
    right: -5 px;
}

.notification - wrapper {
    position: relative;
}

.container {
    display: flex;
    min - height: calc(100 vh - 70 px);
}

.sidebar {
    width: 250 px;
    background - color: #34495e;

            color: white;

            padding: 20px 0;

        }

        

        .sidebar h2 {

            padding: 0 20px 15px;

            font-size: 18px;

            border-bottom: 1px solid # 4 a6278;
    margin - bottom: 15 px;
}

.menu {
    list - style: none;
}

.menu li {
    padding: 12 px 20 px;
    cursor: pointer;
    transition: background - color 0.3 s;
    display: flex;
    align - items: center;
}

.menu li: hover, .menu li.active {
    background - color: #2c3e50;

        }

        

        .menu li i {

            margin-right: 10px;

            width: 20px;

            text-align: center;

        }

        

        .main-content {

            flex: 1;

            padding: 20px;

        }

        

        .welcome-section {

            background-color: white;

            padding: 20px;

            border-radius: 5px;

            box-shadow: 0 2px 5px rgba(0,0,0,0.05);

            margin-bottom: 20px;

        }

        

        .welcome-section h1 {

            color: # 2 c3e50;
    font - size: 24 px;
    margin - bottom: 10 px;
}

.welcome - section p {
    color: #7f8c8d;

        }

        

        .profile-actions {

            display: flex;

            gap: 15px;

            margin-top: 15px;

        }

        

        .profile-actions a {

            color: # 3498 db;
    text - decoration: none;
    font - size: 14 px;
}

.profile - actions a: hover {
    text - decoration: underline;
}

.stats - container {
    display: grid;
    grid - template - columns: repeat(3, 1 fr);
    gap: 20 px;
    margin - bottom: 20 px;
}

.stat - card {
    background - color: white;
    padding: 20 px;
    border - radius: 5 px;
    box - shadow: 0 2 px 5 px rgba(0, 0, 0, 0.05);
}

.stat - card h3 {
    color: #7f8c8d;

            font-size: 14px;

            margin-bottom: 10px;

        }

        

        .stat-card p {

            color: # 2 c3e50;
    font - size: 24 px;
    font - weight: bold;
}

.dynamic - content {
    background - color: white;
    padding: 20 px;
    border - radius: 5 px;
    box - shadow: 0 2 px 5 px rgba(0, 0, 0, 0.05);
}

.dynamic - content h2 {
    color: #2c3e50;

            margin-bottom: 15px;

        }

        

        .dynamic-content ul {

            list-style: none;

        }

        

        .dynamic-content li {

            padding: 10px 0;

            border-bottom: 1px solid # eee;
}

.dynamic - content button {
        background - color: #3498db;

            color: white;

            border: none;

            padding: 5px 10px;

            border-radius: 3px;

            cursor: pointer;

            margin-left: 10px;

        }

    </style>

</head>

<body>

    <div class= "header" >
            <
            div class = "logo" >
            <
            img src = "public/images/braintel.png"
        alt = "Braintel Logo" >
            <
            h1 > Braintel Freelancing Job Portal < /h1> <
            /div> <
            div class = "user-actions" >
            <
            div class = "notification-wrapper" >
            <
            a href = "#"
        id = "notificationsLink" > < i class = "fas fa-bell" > < /i> Notifications <span class="notification-badge">3</span > < /a> <
            /div> <
            a href = "#"
        id = "profileLink" > < i class = "fas fa-user" > < /i> Profile</a >
            <
            a href = "#"
        id = "logoutLink" > < i class = "fas fa-sign-out-alt" > < /i> Logout</a >
            <
            /div> <
            /div>

        <
        div class = "container" >
            <
            div class = "sidebar" >
            <
            h2 > ADVISING < /h2> <
            ul class = "menu" >
            <
            li class = "active"
        id = "myProjectsBtn" >
            <
            i class = "fas fa-briefcase" > < /i> My Projects <
            /li> <
            li id = "postProjectBtn" >
            <
            i class = "fas fa-plus-circle" > < /i> Post Project <
            /li> <
            li id = "applicantsBtn" >
            <
            i class = "fas fa-users" > < /i> Applicants <
            /li> <
            li id = "ratingsBtn" >
            <
            i class = "fas fa-star" > < /i> Ratings & Reviews <
            /li> <
            li id = "messagesBtn" >
            <
            i class = "fas fa-envelope" > < /i> Messages <
            /li> <
            /ul> <
            /div>

        <
        div class = "main-content" >
            <
            div class = "breadcrumb" >
            Home / Dashboard <
            /div>

        <
        div class = "welcome-section" >
            <
            h1 > Welcome to Braintel Freelancing Job Portal! < /h1> <
            p > Hi, < span id = "userNameDisplay" > Jannatul Ferdaus Olshi < /span></p >

            <
            div class = "profile-actions" >
            <
            a href = "#"
        id = "viewProfileLink" > < i class = "fas fa-user" > < /i> View Profile</a >
            <
            a href = "#"
        id = "changePasswordLink" > < i class = "fas fa-key" > < /i> Change Password</a >
            <
            a href = "#"
        id = "logoutWelcomeLink" > < i class = "fas fa-sign-out-alt" > < /i> Logout</a >
            <
            /div> <
            /div>

        <
        div id = "dynamicContent"
        class = "dynamic-content" >
            <!-- Dynamic content will be loaded here -->
            <
            /div> <
            /div> <
            /div>

        <
        script >
            document.addEventListener('DOMContentLoaded', function() {
                const dynamicContent = document.getElementById('dynamicContent');
                const userNameDisplay = document.getElementById('userNameDisplay');

                // Menu buttons
                const myProjectsBtn = document.getElementById('myProjectsBtn');
                const postProjectBtn = document.getElementById('postProjectBtn');
                const applicantsBtn = document.getElementById('applicantsBtn');
                const ratingsBtn = document.getElementById('ratingsBtn');
                const messagesBtn = document.getElementById('messagesBtn');

                // Action links
                const viewProfileLink = document.getElementById('viewProfileLink');
                const changePasswordLink = document.getElementById('changePasswordLink');
                const logoutWelcomeLink = document.getElementById('logoutWelcomeLink');
                const profileLink = document.getElementById('profileLink');
                const logoutLink = document.getElementById('logoutLink');
                const notificationsLink = document.getElementById('notificationsLink');

                // Current user data
                const currentUser = {
                    name: "Jannatul Ferdaus Olshi",
                    notifications: 3
                };

                function initDashboard() {
                    userNameDisplay.textContent = currentUser.name;

                    // Menu click handlers
                    myProjectsBtn.addEventListener('click', () => loadSection('myProjects'));
                    postProjectBtn.addEventListener('click', () => loadSection('postProject'));
                    applicantsBtn.addEventListener('click', () => loadSection('applicants'));
                    ratingsBtn.addEventListener('click', () => loadSection('ratings'));
                    messagesBtn.addEventListener('click', () => loadSection('messages'));

                    // Action links
                    viewProfileLink.addEventListener('click', handleViewProfile);
                    changePasswordLink.addEventListener('click', handleChangePassword);
                    logoutWelcomeLink.addEventListener('click', handleLogout);
                    profileLink.addEventListener('click', handleViewProfile);
                    logoutLink.addEventListener('click', handleLogout);
                    notificationsLink.addEventListener('click', handleNotifications);

                    loadSection('myProjects');
                }

                function loadSection(section) {
                    document.querySelectorAll('.menu li').forEach(item => item.classList.remove('active'));
                    document.getElementById(`${section}Btn`).classList.add('active');

                    document.querySelector('.breadcrumb').textContent = `Home / ${section.charAt(0).toUpperCase() + section.slice(1)}`;

                    switch (section) {
                        case "myProjects":
                            dynamicContent.innerHTML = `
                            <h2>My Projects</h2>
                            <ul>
                                <li>Website Redesign - Status: In Progress</li>
                                <li>Mobile App - Status: Completed</li>
                                <li>Marketing Plan - Status: Pending</li>
                            </ul>`;
                            break;

                        case "postProject":
                            dynamicContent.innerHTML = `
                            <h2>Post New Project</h2>
                            <iframe src="post-project.html" title="Post Project" style="width:100%;height:500px;border:none;"></iframe>`;
                            break;

                        case "applicants":
                            dynamicContent.innerHTML = `
                            <h2>Applicants</h2>
                            <ul>
                                <li>John Doe - Proposal: "$500, 2 weeks" <button>View</button></li>
                                <li>Jane Smith - Proposal: "$450, 10 days" <button>View</button></li>
                            </ul>`;
                            break;

                        case "ratings":
                            dynamicContent.innerHTML = `
                            <h2>Ratings & Reviews</h2>
                            <ul>
                                <li>Freelancer: Alex Johnson - Rating: ★★★★☆ - "Great work!"</li>
                                <li>Freelancer: Sarah Miller - Rating: ★★★★★ - "Excellent communication"</li>
                            </ul>`;
                            break;

                        case "messages":
                            dynamicContent.innerHTML = `
                            <h2>Messages</h2>
                            <p>You have no new messages.</p>`;
                            break;

                        default:
                            dynamicContent.innerHTML = "<h2>Unknown Section</h2>";
                    }
                }

                function handleViewProfile(e) {
                    e.preventDefault();
                    alert(`Viewing profile of ${currentUser.name}`);
                }

                function handleChangePassword(e) {
                    e.preventDefault();
                    alert('Change Password clicked');
                }

                function handleNotifications(e) {
                    e.preventDefault();
                    loadSection('messages');
                }

                function handleLogout(e) {
                    e.preventDefault();
                    if (confirm('Are you sure you want to logout?')) {
                        alert('Logging out...');
                        // In real app: window.location.href = '/logout';
                    }
                }

                initDashboard();
            }); <
        /script> <
        /body> <
        /html>