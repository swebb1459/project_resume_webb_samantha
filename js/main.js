$(document).ready(function() {
    //code below is  a jQuery plugin that stretches
    //the background image to fit the window
    $.backstretch("img/img1.jpg");

    //code below creates a window for an image.
    //you pick a focus point in the image so that
    //it is alwoys in the window.
    $('.focuspoint').focusPoint();

    //The below code inserts new html for the element with an
    //id of testimonial when the button with id more_button is
    //clicked. It choses from an array at random.
    $('#more_button').click(function(){
        var quotes = new Array(
            '"Her work is professional and clean."<br />&mdash;Olivia Jensen',
            '"Great person to work with. It was super fun."<br />&mdash;Sarah P.',
            '"Samantha is awesome. Her work is next level great!"<br /> &mdash;L.J. Vollmar'
        ),
        random = quotes[Math.floor( Math.random() * quotes.length)];
        $('#testimonial').html( random );
    });
});
