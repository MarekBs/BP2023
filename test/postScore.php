<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

session_start();
require_once 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $score = $_POST["score"]; // Assuming the score is sent as a JSON object with a "score" property

    // Insert the score into the database or perform any other necessary operations
    $sql = "INSERT INTO history (user_id, score) VALUES (:userId, :score)";
    $stmt = $db->prepare($sql);
    $stmt->bindParam(":userId", $_SESSION["id"], PDO::PARAM_STR);
    $stmt->bindParam(":score", $score, PDO::PARAM_STR);
    $stmt->execute();

    // You can send a response back to the client if needed
    $response = array('message' => 'Score successfully recorded');
    echo json_encode($response);
}
;



?>
