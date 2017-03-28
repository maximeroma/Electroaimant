$(document).ready(function(){
	
	/* var multipleDebris = function(a){
		var point = $('<div class="debris"></div>').appendTo($("#jeu")) ;
		console.log(typeof point);
		point *= a;
		
	};
	console.log(multipleDebris(20)); */
	var createPoint = function(){
		var pointNumber = prompt('Entrer le nombre de point');
		for( var i = 0; i <= pointNumber; i++){
			$('<div class="debris"></div>').appendTo("#jeu");
		}

	}


	createPoint();
	

	var positionPoint = function(){
		$(".debris").each(function(){
			//var xPosition = Math.random() * 500;
			//console.log(xPosition);						
			//var yPosition = Math.random() * 500;
			$(this).css({ top: Math.random()* 500, left: Math.random()* 500 });
//		
			
		});
	}

	positionPoint();


	var deletePoint = function(){
		if($(".debris").mousedown()){
			$(".debris").hover(function(){
				$(this).remove();
			});
	
		}
	}
	deletePoint();
});


//testMathRandom();