//handles the client side login
var username = document.getElementById("username");
var password = document.getElementById("password");

function login(){
	//TODO: use ajax to make a database query to test whether
	//The username or password is valid, if it is valid, move on
	//to netpaint.html, otherwise return an error to the user saying
	//that the username and password combination is invalid
	
	//move to netpaint.html
	window.location.replace("netpaint.html");
}

function create(){
	//TODO: use ajax to make a database query to test whether
	//or not the username already exsists in the database, if the user
	//does not exist then create the account using the given password
	//also make sure the password is valid. Then log the user in and send
	//them to netpaint.html
}