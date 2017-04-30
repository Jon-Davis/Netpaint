<?php
session_start();
$name =  $_SESSION["name"];
$message = $_POST["text"];
echo "$name: $message<br/>"
?>