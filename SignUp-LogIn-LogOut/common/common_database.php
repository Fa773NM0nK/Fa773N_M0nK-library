<?php

$db_type = "mysql";

$hostname = "";

$username = "";

$password = "";

$db = "";

$dbh = new PDO ( "$db_type:host=$hostname;dbname=$db", $username, $password );

?>
