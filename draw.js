// a paint object example
// blueSquare = {"type":"square","x1":0,"y1":0,"x2":1,"y2":1,"argument":"blue"}
// dogeImage = {"type":"image","x1":0,"y1":0,"x2":1,"y2":1,"argument":"doge.png"}

var paintObjects = []; // a list of paint objects
var ghost; // a changing paint object
var useGhost = false; // determines whether or not to use ghost
var currentType = "rect"; // The currently selected type
var argument = "#000000"; // the current argument for that type

// the canvas to draw too
var canvas = document.getElementById("canvas");
canvas.width = 850;
canvas.height = 400;
var context = canvas.getContext("2d");

canvas.addEventListener("click", function(event) {
	var mousePosition = getMousePosition(event);
	var x1 = mousePosition.x;
	var x2 = x1;
	var y1 = mousePosition.y;
	var y2 = y1;
	if(useGhost == false){
		ghost = {
				type:currentType,
				x1:x1,
				y1:y1,
				x2:x2,
				y2:y2,
				argument:argument
		}
		useGhost = true;
	} else {
		useGhost = false;
		var newObject = {
				type:currentType,
				x1:ghost.x1,
				y1:ghost.y1,
				x2:x2,
				y2:y2,
				argument:argument
		}
		paintObjects.push(newObject);
	}
}, false);

canvas.addEventListener("mousemove", function(event){
	if(useGhost){
		var mousePosition = getMousePosition(event);
		ghost.x2 = mousePosition.x;
		ghost.y2 = mousePosition.y;
		drawObjects();
	}
},false);

function getMousePosition(event){
	var rect = canvas.getBoundingClientRect();
	return {x: event.clientX - rect.left, y: event.clientY - rect.top};
}

// draws all objects onto the canvas
function drawObjects() {
	context.clearRect(0,0,canvas.width,canvas.height);
	for (var i = 0; i < paintObjects.length; i++) {
		draw(paintObjects[i]);
	}
	if(useGhost){
		draw(ghost);
	}
}

// draws the given object onto the canvas
function draw(object) {
	var type = object.type;
	var x1 = object.x1;
	var y1 = object.y1;
	var x2 = object.x2;
	var y2 = object.y2;
	if (type == "image") {
		
	} else {
		// set the color of the object
		context.fillStyle = object.argument;
		if (type == "rect") {
			context.fillRect(x1,y1,x2-x1,y2-y1);
		} else if (type == "oval") {
			var w = x2-x1;
			var h = y2-y1;
			var kappa = .5522848,
				ox = (w / 2) * kappa,
				oy = (h / 2) * kappa,
				xe = x1 + w,
				ye = y1 + h,
				xm = x1 + w / 2,
				ym = y1 + h / 2;
			context.beginPath();
			context.moveTo(x1,ym);
			context.bezierCurveTo(x1,ym-oy,xm-ox,y1,xm,y1);
			context.bezierCurveTo(xm + ox, y1, xe, ym-oy,xe,ym);
			context.bezierCurveTo(xe,ym + oy, xm + ox, ye, xm, ye);
			context.bezierCurveTo(xm-ox,ye,x1,ym+oy,x1,ym);
			context.fill();
		} else if (type == "line") {
			context.beginPath();
			context.lineWidth = "5";
			context.moveTo(x1,y1);
			context.lineTo(x2,y2);
			context.stroke();
		}
	}
}