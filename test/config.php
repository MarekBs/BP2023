<?php
$hostname = 'mysql80.r5.websupport.sk';
$username = 'StuMatematika';
$password = 'Matematika1.';
$dbname = 'stu_mat1';

$db = new PDO("mysql:host=$hostname;dbname=$dbname", $username, $password);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>

