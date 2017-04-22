//handles the client side login
var username = document.getElementById("username");
var password = document.getElementById("password");
var update = document.getElementById("update");

function login(){
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "login.php", true);
	xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	//It's uber super secure to send plain text passwords over the network like this
	xhttp.send("username="+username.value+"&password="+password.value);

	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var loggedIn = xhttp.responseText;
			console.log(loggedIn);
			if(loggedIn == 1){
				window.location.replace("netpaint.html");
			} else {
				update.innerHTML = "Incorrect username and or password."
			}
		}
	}
}

function create(){
	//TODO: use ajax to make a database query to test whether
	//or not the username already exsists in the database, if the user
	//does not exist then create the account using the given password
	//also make sure the password is valid. Then log the user in and send
	//them to netpaint.html
}