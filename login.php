<?php
	//Handles the server side login
	include 'DatabaseAdaptor.php';
	$username = $_POST["username"];
	$password = $_POST["password"];
	$userID = $DBinstance->testUsernamePassword($username,$password);
	if($userID === false)
		echo false;
	else 
		echo true;
?>