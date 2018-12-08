$(document).ready(function(){
    lightning_noe();
    lightning_two();
    lightning_three();

    $("#head").click(clickHandler);
    $("#eyes").click(clickHandler);
    $("#nose").click(clickHandler);
    $("#mouth").click(clickHandler);
});//end doc.onready function

function clickHandler() {
    var clix = 0;
    if (clix < 9) {
        clix += 1;
    } else {
        clix = 0;
    }
}

function lightning_noe(t) {
    $("#container #lightning1").fadeIn(250).fadeOut(250);
    setTimeout("lightning_one()", 4000);
};

function lightning_two(t) {
    $("#container #lightning2").fadeIn("fast").fadeOut("fast");
    setTimeout("lightning_two()", 5000);
};

function lightning_three(t) {
    $("#container #lightning3").fadeIn("fast").fadeOut("fast");
    setTimeout("lightning_three()", 7000);
};