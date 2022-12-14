<?php 
?>
<!DOCTYPE html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Dolphin CRM</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Beginning of nav bar -->
    <header>
        <ul>
            <li><img src="media\35fc8ef6-8194-4482-9ea1-ef8a261d84fe.jpeg" alt="Bug Icon"/></li>
            <li>
                <h3>Dolphin CRM</h3>
            </li>
        </ul>
    </header>
    <!-- End of nav bar -->


    <!-- Beginning of sidebar -->
    <aside>
        <div id="sidebar-items">
            <ul style="display:none;">
                <li class="sidebar-item" id="home">
                    <img src="media/home-24px.svg" alt="home"/>Home
                </li>
                <li style="display:none" class="sidebar-item" id="addcontact">
                    <img src="media/person_add-24px.svg" alt="add-user"/>New Contact
                </li>
                <li class="sidebar-item" id="user">
                    <img src="media/add_circle-24px.svg" alt="add-issue"/>Users
                </li>
                <li class="sidebar-item" id="logout">
                    <img src="media/power_settings_new-24px.svg" alt="logout"/>Logout
                </li>
            </ul>
        </div>
    </aside>
    <!-- End of sidebar -->

    <!-- Beginning of main display -->
    <div id="container">
        <main>
            <div class="inner">
                <form method="post">
                    <h2>User Login</h2>

                    <label>Email</label>
                    <input id="email" type="email" name="email" required>
                    
                    <label>Password</label>
                    <input id="password" type="password" name="password" required>
                    
                    <button id="login" name="login" type="button">Submit</button>
                </form>
            </div>
        </main>
    </div>
    <!-- End of main display -->
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script>
         $.getScript("login_check.js");
    </script>
</body>
</html>