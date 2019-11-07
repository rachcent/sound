let osc;
let playing = false;
let r, g, b;

function setup() {
	createCanvas(500,500);
  textAlign(CENTER);

  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.amp(1);
  osc.start();
}

function draw() {

  text('click on boxes', width/2, height/2);
	fill(r,g,b);
	square(30, 20, 55);
	square(170, 100, 55);
	square(100, 50, 50);
	square(170, 20, 55);
	square(30, 100, 55);

}

function mousePressed() {
  // Check if mouse is inside the square
	console.log('mousePressed');

  let d = dist(mouseX, mouseY, 2, 25);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
		// ramp amplitude to 0.5 over 0.05 seconds
		osc.amp(0.5, 0.05);
		osc.freq(400);
		playing = true;
		backgroundColor = color(0,255,255);
	} else {
		// ramp amplitude to 0 over 0.5 seconds
		osc.amp(0, 0.5);
		playing = false;
		backgroundColor = color(255,0,255);
  }

	let e = dist(mouseX, mouseY, 40, 2);
  if (e < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
		// ramp amplitude to 0.5 over 0.05 seconds
		osc.amp(0.5, 0.05);
		osc.freq(700);
		playing = true;
		backgroundColor = color(0,255,255);
	} else {
		// ramp amplitude to 0 over 0.5 seconds
		osc.amp(0, 0.5);
		playing = false;
		backgroundColor = color(255,0,255);
  }

	let y = dist(mouseX, mouseY, 170, 20);
	if (y < 100) {
		// Pick new random color values
		r = random(255);
		g = random(255);
		b = random(255);
		// ramp amplitude to 0.5 over 0.05 seconds
		osc.amp(0.5, 0.05);
		osc.freq(500);
		playing = true;
		backgroundColor = color(0,255,255);
	} else {
		// ramp amplitude to 0 over 0.5 seconds
		osc.amp(0, 0.5);
		playing = false;
		backgroundColor = color(255,0,255);
	}

	let k = dist(mouseX, mouseY, 100, 170);
	if (k < 100) {
		// Pick new random color values
		r = random(255);
		g = random(255);
		b = random(255);
		// ramp amplitude to 0.5 over 0.05 seconds
		osc.amp(0.5, 0.05);
		osc.freq(100);
		playing = true;
		backgroundColor = color(0,255,255);
	} else {
		// ramp amplitude to 0 over 0.5 seconds
		osc.amp(0, 0.5);
		playing = false;
		backgroundColor = color(255,0,255);
	}

	let q = dist(mouseX, mouseY, 100, 150);
	if (q < 100) {
		// Pick new random color values
		r = random(255);
		g = random(255);
		b = random(255);
		// ramp amplitude to 0.5 over 0.05 seconds
		osc.amp(0.5, 0.05);
		osc.freq(900);
		playing = true;
		backgroundColor = color(0,255,255);
	} else {
		// ramp amplitude to 0 over 0.5 seconds
		osc.amp(0, 0.5);
		playing = false;
		backgroundColor = color(255,0,255);
	}




}
