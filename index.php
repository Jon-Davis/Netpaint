<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Net Paint</title>
<link href="styles.css" type="text/css" rel="stylesheet" />
</head>
<body>
	<?php
	session_start();
	if (isset($_SESSION["name"])) {
		header('Location: netpaint.php');
	}
	?>
	<div id="login">
		<div id="loginDialog">
			<p>Login</p>
			<form id="loginForm" onsubmit="return false;">
				<table>
					<tr>
						<td>Username</td>
						<td><input id="username" type="text" required></td>
					</tr>
					<tr>
						<td>Password</td>
						<td><input id="password" type="password" required></td>
					</tr>
					<tr>
						<td colspan="2">
							<div id="update" style="color:red;"></div>
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<input type="submit" value="Login" onclick="login()">
							<input type="submit" value="Create" onclick="create()">
						</td>
					</tr>
				</table>
			</form>
		</div>
	</div>
	<script type="text/javascript" src="login.js"></script>
</body>
</html>