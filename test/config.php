<?php
$hostname = 'mysql80.r5.websupport.sk';
$username = 'matematika1stu';
$password = 'Root123root';
$dbname = 'matematika1stu';

$db = new PDO("mysql:host=$hostname;dbname=$dbname", $username, $password);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>

