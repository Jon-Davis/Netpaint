//handles the client side login
var username = document.getElementById("username");
var password = document.getElementById("password");
var update = document.getElementById("update");

function login(){
	if(!validInput())
		return;
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "login.php", true);
	xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhttp.send("username="+username.value+"&password="+password.value+"&action=login");

	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var loggedIn = xhttp.responseText;
			console.log(loggedIn);
			if(loggedIn == 1){
				window.location.replace("netpaint.php");
			} else {
				update.innerHTML = "Incorrect username and or password.";
			}
		}
	}
}

function create(){
	if(!validCreate())
		return;
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "login.php", true);
	xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhttp.send("username="+username.value+"&password="+password.value+"&action=create");

	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var loggedIn = xhttp.responseText;
			console.log(loggedIn);
			if(loggedIn == 1){
				window.location.replace("netpaint.php");
			} else {
				update.innerHTML = "User with that username already exists.";
			}
		}
	}
}

function validInput(){
	if(username.value.length > 0 && password.value.length > 0)
		return true;
	else
		return false;
}

function validCreate(){
	if (username.value.length <= 4){
		update.innerHTML = "Username must be greater than 4 characters";
		return false;
	}
	if (password.value.length <= 6){
		update.innerHTML = "Password must be greater than 6 characters";
		return false;
	}
	return true;
}