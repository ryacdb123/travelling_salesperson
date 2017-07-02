var pokemon = [];
var totalPokemon = 20;
var bestEver;

var recordDistance;

function setup(){
	createCanvas(400, 400);

	for(var i = 0; i < totalPokemon; i++){
		var v = createVector(random(width), random(height));
		pokemon[i] = v;
	}

	var d = calDistance(pokemon);
	recordDistance = d;
	bestEver = pokemon.slice();
	console.log(recordDistance);
}

function swap(a, i, j){

	var temp = a[i];
	a[i] = a[j];
	a[j] = temp;

}

function draw(){
	background(0);
	fill(255);
	for(var i = 0; i < pokemon.length; i++){
		ellipse(pokemon[i].x, pokemon[i].y, 20, 20)
	}

	stroke(255);
	strokeWeight(2);
	noFill();	

	beginShape();

	for(var i =0; i < pokemon.length; i++){
		vertex(pokemon[i].x, pokemon[i].y);
	}
	endShape();





	stroke(255, 0, 255);
	strokeWeight(5);
	noFill();	

	beginShape();

	for(var i =0; i < bestEver.length; i++){
		vertex(bestEver[i].x, bestEver[i].y);
	}
	endShape();





	var i = floor(random(pokemon.length));
	var j = floor(random(pokemon.length));

	swap(pokemon, i, j);

	var d = calDistance(pokemon);
	if(d < recordDistance){
		recordDistance = d;
		bestEver = pokemon.slice();
		console.log(recordDistance);
	}
}

function calDistance(points){
	var sum = 0;
	var next = i + 1;

	for(var i = 0; i < points.length - 1; i++){
		var d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
		sum += d;
	}
	return sum;
}