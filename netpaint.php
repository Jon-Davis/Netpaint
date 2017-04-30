<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Net Paint</title>
<link href="styles.css" type="text/css" rel="stylesheet" />
</head>
<body>
	<div id="container">
	<?php session_start(); ?>
		<div id="loggedIn">
			Logged in as: <?php echo $_SESSION["name"]?>
			<input id="logout" style="float:right" type="button" value="logout" onclick="logout()"> 
		</div>
		<div id="canvasDiv">
			<canvas id="canvas"></canvas>
		</div>
		<div id="tools">
			<div id="shapePicker">
				<p>Pick a shape</p>
				<input type="button" value="Rectangle" onclick="setType('rect')"> <input
					type="button" value="Oval" onclick="setType('oval')"> <input
					type="button" value="Line" onclick="setType('line')">
			</div>
			<div id="colorPicker">
				<p>Pick a color</p>
				<input type="color" id="color" value="#0000FF" onchange="setColor()">
			</div>
			<div id="or">
				--OR--
				<div id="imagePicker">
					<p>Pick an image</p>
					<input type="button" value="Doge"
						onclick="setType('image','https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg')">
					<input type="button" value="Take my mo.."
						onclick="setType('image','https://i.ytimg.com/vi/h1Gm5OGqw3U/maxresdefault.jpg')">
					<input type="button" value="Custom" onclick='customImage()'>
				</div>
			</div>
		</div>
		<div id="chatBox"></div>
		<div id="textInputDiv">
			<form onsubmit="return sendMessage()">
				<input type="text" id="textInput" /> 
				<input type="submit" id="submitTextInput" value="Send"/>
			</form>
		</div>
	</div>
	<script type="text/javascript" src="draw.js"></script>
	<script type="text/javascript" src="textChat.js"></script>
	<script type="text/javascript" src="logout.js"></script>
</body>
</html>