var userScore = 0;
var wins = 0;
var losses = 0;
var computerScore = Math.floor(Math.random()*102+19);


var redCrystal = Math.floor(Math.random()*12+1);
var blueCrystal = Math.floor(Math.random()*12+1);
var greenCrystal = Math.floor(Math.random()*12+1);
var yellowCrystal = Math.floor(Math.random()*12+1);

$("#cpuScore").html(computerScore);


console.log("The value of the Red Crystal is " + redCrystal);
console.log("The value of the Blue Crystal is " + blueCrystal);
console.log("The value of the Green Crystal is " + greenCrystal);
console.log("The value of the Yellow Crystal is " + yellowCrystal);


function crystalGame() {

	if ((computerScore === userScore)) {
 		++wins;
	  	alert("You won! Nice!!!!!!");
	  	computerScore = Math.floor(Math.random()*102+19);
	  	$("#wins").html("Wins: " + wins);
	  	userScore = 0;
	  	$("#cpuScore").html(computerScore);
	  	$("#userScore").html(userScore);
  	}

	if ((userScore >= computerScore)) {
	  	++losses;
	  	alert("You lost, try getting good");
	  	computerScore = Math.floor(Math.random()*102+19);
	  	$("#cpuScore").html(computerScore);
	  	redCrystal = Math.floor(Math.random()*11+1);
		blueCrystal = Math.floor(Math.random()*11+1);
		greenCrystal = Math.floor(Math.random()*11+1);
		yellowCrystal = Math.floor(Math.random()*11+1);
	
	  	$("#losses").html("Losses: " + losses);
	  	userScore = 0;
	  	$("#userScore").html(userScore);
	  	crystalCheck();
	  	crystalCheck();
	  	crystalCheck();
  	}
}


function crystalCheck () {

	if ((redCrystal === blueCrystal)) {
	redCrystal = Math.floor(Math.random()*11+1);

	}

	if ((redCrystal === greenCrystal)) {
	redCrystal = Math.floor(Math.random()*11+1);
	
	}

	if ((redCrystal === yellowCrystal)) {
	redCrystal = Math.floor(Math.random()*11+1);
	
	}

	if ((blueCrystal === greenCrystal)) {
	blueCrystal = Math.floor(Math.random()*11+1);
	
	}

	if ((blueCrystal === yellowCrystal)) {
	blueCrystal = Math.floor(Math.random()*11+1);
	
	}

	if ((greenCrystal === yellowCrystal)) {
	greenCrystal = Math.floor(Math.random()*11+1);
	
	}
}


crystalCheck();
crystalCheck();
crystalCheck();


 $(".rButton").on("click", function() {
 	userScore += redCrystal;
 	$("#userScore").html(userScore);
 	crystalGame()
 });

  $(".bButton").on("click", function() {
  	userScore += blueCrystal;
 	$("#userScore").html(userScore);
 	crystalGame()
 });

  $(".gButton").on("click", function() {
  	userScore += greenCrystal;
 	$("#userScore").html(userScore);
 	crystalGame()
 });

  $(".yButton").on("click", function() {
  	userScore += yellowCrystal;
 	$("#userScore").html(userScore);
 	crystalGame()
 });