var sun;
var earth;
var mercury;
var venus;
var mars;
var moon;

var astroids = [];


function setup() {
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);
	//Period, orbit rad, size
	sun = new Ball(1, 0, 100);
	mercury = new Ball(88, 200, 8);
	venus = new Ball(225, 300, 15)
	earth = new Ball(365, 400, 10);
	mars = new Ball(687, 500, 9);
	moon = new Ball(30, 10, 5);
	
	//array of balls varying between 550-650 orbit rad, with random periods between 16 and 18 years, small variation in size also
	for (var i=0; i<1000; i++){
		astroids.push(new Ball(random(16*365, 18*365), random(550, 650), random(1,5)))
		astroids[i].randomiseang();
	}
	
}

function draw() {
	background(0);
	
	sun.render();
	sun.update();
	
	noFill();
	stroke(255);
	ellipse(width/2, height/2, mercury.rad*2);
	fill(255);
	mercury.render();
	mercury.update();
	
	noFill();
	stroke(255);
	ellipse(width/2, height/2, venus.rad*2);
	fill(255);
	venus.render();
	venus.update();
	
	noFill();
	stroke(255);
	ellipse(width/2, height/2, earth.rad*2);
	fill(255);
	earth.render();
	earth.update();
	
	noFill();
	stroke(255);
	ellipse(width/2, height/2, mars.rad*2);
	fill(255);
	mars.render();
	mars.update();
	
	moon.setCenter(earth.pos);
	moon.render();
	moon.update();
	
	for (var i=0; i<1000; i++){
		
		astroids[i].render();
		astroids[i].update();
		
	}
}

function Ball(period, rad, size){
	this.center = createVector(width/2, height/2);
	this.fr = 1;

	this.period = period; //seconds per rotation
	this.angvel = 2*PI/(this.period*this.fr);
	this.ang = 0;
	this.pos = 0;
	
	this.rad = rad;
	this.size = size;
	
	this.setCenter = function(center){
		this.center = center;
	}
	
	this.render = function(){
		ellipse(this.pos.x, this.pos.y, this.size);
	}
	
	this.update = function(){
		this.ang += this.angvel;
		this.pos = createVector(this.center.x + this.rad*cos(this.ang), this.center.y + this.rad*sin(this.ang));
	}
	
	this.randomiseang = function(){
		this.ang = random(0, 2*PI);
	}
}