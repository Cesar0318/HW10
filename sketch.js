var mario= []
var step = 1;
var slider;
var h = true;

function preload(){
	img = loadImage('images/mario.png');

}

function setup() {
	slider = createSlider(0,360);

	createCanvas(1000,1000);
	
	for (var i=0; i<5; i++) {
		
	mario.push(new Mario(random(width),random(height)));
		
	var button = select('#button');
	
	button.mousePressed(stop);
	
	colorMode(HSB);


}
	}

function draw() {
	
	background("pink");
	
	for(var i = 0; i<5; i++) {
		if( h ==true ){mario[i].move()}
		
		mario[i].show();
		
		
	}
}


function Mario(x,y) {
	this.x = x;
	this.y = y;
	
	
	this.show = function() {
		tint(slider.value(),100,100);
		image(img, this.x, this.y, width/2, height/2)
	}
	
	this.move = function(){
		this.x = this.x+step
		this.y = this.y+step

		if(this.x > 100) {
			step = -1;
		}

		if( this.x < -100) {
			step = 1
		}
	}
}

function stop(){

	if (h== true) {h = false} 
		else { h= true}
}





















