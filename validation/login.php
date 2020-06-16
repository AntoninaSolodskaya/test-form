<?php

$name = filter_var(trim($_POST['username']), FILTER_SANITIZE_STRING);
$password = filter_var(trim($_POST['password']), FILTER_SANITIZE_STRING);

if (isset($_POST['submit'])) {
    if (mb_strlen($name) < 3 || mb_strlen($name) > 30 || empty($_POST['username'])) {
        echo "Invalid name or password .  <a href='/'>Correct mistake</a>";
    }
    if (mb_strlen($password) < 3 || mb_strlen($password) > 40 || empty($_POST['password'])) {
        echo "Invalid password or name .  <a href='/'>Correct mistake</a>";
    } else {

        $password = md5($password . "ghsf2458");
        $db = mysqli_connect("localhost", "root", "root", "form");
        $db->query("SET NAMES 'utf8'");
        $result = $db->query("SELECT * FROM `users` WHERE `username` = '$name' AND `password` = '$password'");

        $user = $result->fetch_assoc();
        $check = $_POST['remember'];

        if (count($user) == 0) {
            echo "Invalid name or password .  <a href='/'>Correct mistake</a>";
        } 

        if($check)
        {
            $value = md5($user['remember']);
            setcookie('remember', $value, $time, '/');
            setcookie('pass', $user['password'], time() + 3600, "/");

            $db->close();
            header('Location: /');
        } 
    }
}