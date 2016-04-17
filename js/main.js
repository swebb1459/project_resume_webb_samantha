$(document).ready(function() {
    $.backstretch("img/img1.jpg");

    $('.focuspoint').focusPoint();

    $('#more_button').click(function(){

        var quotes = new Array('"Her work is professional and clean."<br />&mdash;Olivia Jensen', '"Great person to work with. It was super fun."<br />&mdash;Sarah P.', '"Samantha is awesome. Her work is next level great!"<br /> &mdash;L.J. Vollmar'),
        random = quotes[Math.floor( Math.random() * quotes.length)];
        $('#testimonial').html( random );
    });
});
