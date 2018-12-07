$(document).ready(function() {
    const checkForCode = function () {
        var discount = Math.floor((Math.random() * 5) + 5);
        var discount_msg = "<p>Your Discount is " + discount + "%</p>";
        $(this).append(discount_msg);
        $(".guess_box").unbind("click");
    };
    $(".guess_box").click(checkForCode);
});

function getRandom(num) {
    return Math.floor(Math.random() * num);
}