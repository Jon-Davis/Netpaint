function sendMessage(){
	if(document.getElementById("textInput").value == "")
		return false;
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "textChat.php", true);
	xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	//It's uber super secure to send plain text passwords over the network like this
	xhttp.send("text="+document.getElementById("textInput").value);

	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var message = xhttp.responseText;
			var chat = document.getElementById("chatBox");
			chat.innerHTML += message;
			document.getElementById("textInput").value = "";
			chat.scrollTop = chat.scrollHeight;
		}
	}
	return false;
}