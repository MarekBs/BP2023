<?php
$hostname = 'localhost';
$username = 'root';
$password = '';
$dbname = 'matematika1';

$db = new PDO("mysql:host=$hostname;dbname=$dbname", $username, $password);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>

