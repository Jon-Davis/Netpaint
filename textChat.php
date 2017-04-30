<?php
include 'DatabaseAdaptor.php';
session_start();
$id =  $_SESSION["id"];
if(isset($_POST["text"])){
	$message = $_POST["text"];
	$DBinstance->addMessage($id, $message);
} else {
	$arr = $DBinstance->getMessages();
	echo json_encode($arr);
}
?>