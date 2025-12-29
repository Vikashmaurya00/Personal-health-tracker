<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h1 style="color:rgb(30, 153, 153)">WELCOME TO BODY SYNC</h1><br>
    <h2>Login to your account</h2>

    <form action="login.php" method="post">
        <input type="email" name="email" placeholder="Email" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit" class="login-btn">Login</button>
    </form><br><br>

    <p><a href="forgot.html">Forgot Password?</a></p><br>
    <p>Don't have an account? <a href="register.php">Register here</a></p>

    <?php

    $con = mysqli_connect("localhost", "root", "Vikash@123", "users"); 

    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    if (isset($_POST['email']) && isset($_POST['password'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];

        $query = "SELECT * FROM mydata WHERE email='$email'";
        $result = mysqli_query($con, $query);

        if (mysqli_num_rows($result) == 1) {
            $row = mysqli_fetch_assoc($result);

            if (password_verify($password, $row['password'])) {

                // SUCCESS LOGIN → SEND DATA TO JAVASCRIPT
                echo "
                <script>
                    alert('Login Successful! Welcome, " . $row['name'] . "');

                    // Store user info in localStorage
                    localStorage.setItem('user_name', '" . $row['name'] . "');
                    localStorage.setItem('user_gender', '" . $row['gender'] . "');
                    localStorage.setItem('last_login', new Date().toDateString());

                    // Move to dashboard
                    window.location.href = 'dashboard.html';
                </script>";
            } else {
                echo "<script>alert('Incorrect Password');</script>";
            }
        } else {
            echo "<script>alert('No account found with this email');</script>";
        }
    }
    ?>

</div>

</body>
</html>
