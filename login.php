<?php
// Handles the server side login
include 'DatabaseAdaptor.php';
$username = $_POST ["username"];
$username = htmlspecialchars($username);
$password = $_POST ["password"];
$password = htmlspecialchars($password);
$action = $_POST ["action"];
if ($action == "login") {
	$userID = $DBinstance->testUsernamePassword ( $username, $password );
	if ($userID === false) {
		echo false;
	} else {
		session_id($userID);
		session_start();
		$_SESSION["name"] = $username;
		$_SESSION["id"] = $userID;
		echo true;
	}
} else if ($action == "create") {
	if (! $DBinstance->userExists ( $username )) {
		$userID = $DBinstance->newAccount ( $username, $password );
		session_id($userID);
		session_start();
		$_SESSION["name"] = $username;
		$_SESSION["id"] = $userID;
		echo true;
	} else {
		echo false;
	}
}
?>