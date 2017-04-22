<?php
// Handles the server side login
include 'DatabaseAdaptor.php';
$username = $_POST ["username"];
$password = $_POST ["password"];
$action = $_POST ["action"];
if ($action == "login") {
	$userID = $DBinstance->testUsernamePassword ( $username, $password );
	if ($userID === false)
		echo false;
	else
		echo true;
} else if ($action == "create"){
	if(!$DBinstance->userExists($username)){
		$DBinstance->newAccount($username, $password);
		echo true;
	} else {
		echo false;
	}
}
?>