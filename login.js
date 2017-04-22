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
	//It's uber super secure to send plain text passwords over the network like this
	xhttp.send("username="+username.value+"&password="+password.value+"&action=login");

	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var loggedIn = xhttp.responseText;
			console.log(loggedIn);
			if(loggedIn == 1){
				window.location.replace("netpaint.html");
			} else {
				update.innerHTML = "Incorrect username and or password.";
			}
		}
	}
}

function create(){
	if(!validInput())
		return;
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "login.php", true);
	xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	//It's uber super secure to send plain text passwords over the network like this
	xhttp.send("username="+username.value+"&password="+password.value+"&action=create");

	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var loggedIn = xhttp.responseText;
			console.log(loggedIn);
			if(loggedIn == 1){
				window.location.replace("netpaint.html");
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