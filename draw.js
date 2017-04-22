// a paint object example
// blueSquare = {"type":"square","x1":0,"y1":0,"x2":1,"y2":1,"argument":"blue"}
// dogeImage = {"type":"image","x1":0,"y1":0,"x2":1,"y2":1,"argument":"doge.png"}

var paintObjects; // a list of paint objects
var ghost; // a changing paint object
// the canvas to draw too
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// draws all objects onto the canvas
function drawObjects() {
	for (var i = 0; i < paintObjects.length; i++) {
		draw(paintObjects[i]);
	}
}

// draws the given object onto the canvas
function draw(object) {
	var type = object["type"];
	var x1 = object["x1"];
	var y1 = object["y1"];
	var x2 = object["x2"];
	var y2 = object["y2"];
	if (type == "image") {
		
	} else {
		// set the color of the object
		context.fillStyle(object["argument"])
		if (type == "square") {
			context.fillRect(x1,y1,x2,y2);
		} else if (type == "circle") {
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
			conext.bezierCurveTo(x1,ym-oy,xm-ox,y,xm,y);
			conext.bezierCurveTo(xm + ox, y, xe, ym-oy,xe,ym);
			conext.bezierCurveTo(xe,ym + oy, xm + ox, ye, xm, ye);
			conext.bezierCurveTo(xm-ox,ye,x,ym+oy,x,ym);
			context.fill();
		} else if (type == "line") {
			context.beginPath();
			context.lineWidth = "5";
			context.moveTo(x1,y1);
			context.lineTo(x2,y2);
			conext.stroke();
		}
	}
}