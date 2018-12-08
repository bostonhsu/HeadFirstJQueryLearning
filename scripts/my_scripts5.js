$(document).ready(function(){
    var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0; 
    lightning_noe();
    lightning_two();
    lightning_three();

	goLightning();
	window.onblur = stopLightning;
	window.onfocus = goLightning;
	var int1, int2, int3;
	function goLightning() {
		int1 = setInterval(function() {
			lightning_noe();
		}, 4000);
		int2 = setInterval(function() {
			lightning_two();
		}, 5000);
		int3 = setInterval(function() {
			lightning_three();
		}, 7000);
	}
	function stopLightning() {
		window.clearInterval(int1);
		window.clearInterval(int2);
		window.clearInterval(int3);
	}

	var clix = [0, 0, 0, 0];
    $("#head").click(function () {
		moveMe(0, this);
	});

	$("#eyes").click(function () {
		moveMe(1, this);
	});

	$("#nose").click(function () {
		moveMe(2, this);
	});//end click

	$("#mouth").click(function () {
		moveMe(3, this);
	});

	function moveMe(i, obj) {
		if (clix[i] < 9) {
			$(obj).animate({left:"-=367px"}, 500);
			clix[i] = clix[i] + 1;
		} else {
			clix[i] = 0;
			$(obj).animate({left:"0px"}, 500);
		}
	}
});//end doc.onready function

function clickHandler() {
    var clix = 0;
    if (clix < 9) {
        clix += 1;
    } else {
        clix = 0;
    }
}

function lightning_noe() {
    $("#container #lightning1").fadeIn(250).fadeOut(250);
};

function lightning_two() {
    $("#container #lightning2").fadeIn("fast").fadeOut("fast");
};

function lightning_three() {
    $("#container #lightning3").fadeIn("fast").fadeOut("fast");
};