function logout(){
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "logout.php", true);
	xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	//It's uber super secure to send plain text passwords over the network like this
	xhttp.send();

	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			window.location.replace("index.php");
		}
	}
}