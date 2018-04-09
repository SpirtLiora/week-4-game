$(document).ready(function(){

	colorcrystals = ['assets/images/redcrystal.jpg', 'assets/images/bluecrystal.jpg', 'assets/images/yellowcrystal.jpg', 'assets/images/greencrystal.jpg'];
	
	var wins = 0;
	var lose = 0;
	var yourscore = 0;
	
	var matchscore = Math.floor((Math.random() * 101) + 19);

	$("#matchscores").text(matchscore);

	function restart() {
		matchscore = Math.floor((Math.random() * 101) + 19);
		console.log(matchscore);
		$("#matchscores").text(matchscore);
    // here you make a new colorcounts value but never put it anywhere
		colorcounts = (Math.floor(Math.random() * 11) + 1);
		yourscore = 0;
    $("#scores").text(yourscore);
	}

    for (var i = 0; i < colorcrystals.length; i++) {
    	var colorcounts = Math.floor(Math.random() * 11) + 1;
      	var imagecrystal = $("<img>");
      	imagecrystal.attr("src", colorcrystals[i]);
      	imagecrystal.addClass("crystal-image");
        // need to update this one each element
      	imagecrystal.attr("data-crystalvalue", colorcounts);
      	$("#colorcrystal").append(imagecrystal);
    }

    $(".crystal-image").on("click", function() {
		var crystalValue = ($(this).attr("data-crystalvalue"));
      	crystalValue = parseInt(crystalValue);
		    console.log(matchscore);
      	yourscore += crystalValue;
      	console.log(yourscore);
      	$("#scores").text(yourscore);

		if (yourscore === matchscore) {
      		wins++;
        	$("#wins").text(wins);
        	restart();
      	}
      	else if (yourscore >= matchscore) {
      		lose++;
        	$("#lose").text(lose);
        	restart();
      	}
    });
});
