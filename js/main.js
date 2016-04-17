$(document).ready(function() {
    $.backstretch("img/img1.jpg");

    $('.focuspoint').focusPoint();

    $('#more_button').click(function(){

        var quotes = new Array('adsf', 'hrhrtghtrrtn', 'drhghdsfgdfg'),
        random = quotes[Math.floor( Math.random() * quotes.length)];
        $('#testimonial').text( random );
    });
});
