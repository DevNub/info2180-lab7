<?php

$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';
$country = htmlspecialchars($_GET['country']);
$all = htmlspecialchars($_GET['all']);

$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);


if($country==="" && $all!=true){
    die();
}

    echo '<ul>';
    foreach ($results as $row) {
        echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
    }
    echo '</ul>';
