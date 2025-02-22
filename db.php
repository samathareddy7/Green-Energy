<?php
$host = "localhost"; // Change if necessary
$user = "root"; // Change if using a different user
$pass = ""; // Your MySQL password
$dbname = "user_auth"; // Your database name

$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
