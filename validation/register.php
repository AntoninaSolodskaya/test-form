<?php

$username = filter_var(trim($_POST['username']), FILTER_SANITIZE_STRING); 
$password = filter_var(trim($_POST['password']), FILTER_SANITIZE_STRING);  
$email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);  

if (isset($_POST['submit'])) {
    if (mb_strlen($email) < 10 || mb_strlen($email) > 40 || !$email || empty($_POST['email']))
    {
       echo "Invalid email .  <a href='/'>Correct mistake</a>";
    } 
    if (mb_strlen($username) < 3 || mb_strlen($username) > 30 || empty($_POST['username']))
    {
        echo "Invalid name length . <a href='/'>Correct mistake</a>";
    } 
    if (mb_strlen($password) < 3 || mb_strlen($password) > 14 || empty($_POST['password'])) {
        echo "Invalid password length(2 to 14 characters) . <a href='/'>Correct mistake</a>";
    } 
    else
    {
        $password = md5($password . "ghsf2458");
        $db = mysqli_connect("localhost", "root", "root", "form");
        $db->query("SET NAMES 'utf8'");
        $db->query("INSERT INTO `users` (`email`, `username`, `password`) VALUES ('$email', '$username', '$password')");
        $db->close(); 
        header('Location: /');
    }
}
?>