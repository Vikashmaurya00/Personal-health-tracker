<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h1 style="color:rgb(30, 153, 153)">Welcome To BODY SYNC</h1><br>
    <h2>Create your account</h2>

    <form action="register.php" method="post">
        <input type="text" name="username" placeholder="Username" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="password" name="password" placeholder="Password" required >
    

        <!-- Gender Section -->
        <div class="gender-section">
            <label>Gender:</label>
            <input type="radio" name="gender" value="Male" required> Male
            <input type="radio" name="gender" value="Female"> Female
        </div>

        <button type="submit" class="register-btn">Register</button>
    </form><br><br>

    <p>Already have an account? <a href="login.php">Login here</a></p>

<?php
// Database Connection
$con = mysqli_connect("localhost", "root", "Vikash@123", "users"); 

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['username'];  
    $email = $_POST['email'];     
    $password = $_POST['password']; 
    $gender = $_POST['gender'];   

    // Encrypt password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert query
    $query = "INSERT INTO mydata (name, email, password, gender)
              VALUES ('$name', '$email', '$hashed_password', '$gender')";

    if (mysqli_query($con, $query)) {

       echo "
<script>
    alert('Registration Successful!');

    localStorage.setItem('user_name', '$name');
    localStorage.setItem('user_age', '$age');
    localStorage.setItem('user_gender', '$gender');
    localStorage.setItem('last_login', new Date().toDateString());

    window.location.href = 'home.html';  
</script>";

    } 
    else {
        echo "<script>alert('Error: " . mysqli_error($con) . "');</script>";
    }
}
?>
</div>

</body>
</html>
