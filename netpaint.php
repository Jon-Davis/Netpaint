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
		<div id="loggedIn">Logged in as: <?php echo $_SESSION["name"]?></div>
		<div id="canvasDiv">
			<canvas id="canvas"></canvas>
		</div>
		<div id="tools">
			<div id="shapePicker">
				<p>Pick a shape</p>
				<input type="button" value="Rectangle" onclick="setType('rect')">
				<input type="button" value="Oval" onclick="setType('oval')">
				<input type="button" value="Line" onclick="setType('line')">
			</div>
			<div id="colorPicker">
				<p>Pick a color</p>
				<input type="color" id="color" value="#0000FF" onchange="setColor()">
			</div>
			<div id="or">
				--OR--
				<div id="imagePicker">
					<p>Pick an image</p>
					<input type="button" value="Doge"> <input type="button"
						value="Take my mo.."> <input type="button" value="Custom">
				</div>
			</div>
		</div>
		<div id="chatBox"></div>
		<div id="textInputDiv">
			<input type="text" id="textInput" /> <input type="button"
				id="submitTextInput" value="Send" />
		</div>
	</div>
	<script type="text/javascript" src="draw.js"></script>
</body>
</html>