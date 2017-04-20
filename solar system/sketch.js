var sun;
var earth;
var moon;


function setup() {
	frameRate(60);
	createCanvas(1000,1000);
	sun = new Ball(1, 0, 200);
	earth = new Ball(365, 400, 20);
	moon = new Ball(30, 40, 10);
	
}

function draw() {
	background(0);
	
	sun.render();
	sun.update();
	
	earth.render();
	earth.update();
	
	moon.setCenter(earth.pos);
	moon.render();
	moon.update();
	

}

function Ball(period, rad, size){
	this.center = createVector(width/2, height/2);
	this.fr = 60;

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
}