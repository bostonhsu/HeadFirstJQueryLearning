$(document).ready(function(){
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