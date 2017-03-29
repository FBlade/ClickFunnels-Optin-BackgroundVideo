/*
    https://github.com/FBlade/ClickFunnels-Optin-BackgroundVideo/
 */
$( document ).ready(function() {
    loadCSS = function(href) {
        var cssLink = $("<link rel='stylesheet' type='text/css' href='"+href+"'>");
        $("head").append(cssLink);
    };


    $.getScript( 'https://mindsetsamurai.com/ClickFunnels-Optin-BackgroundVideo/script.js', function(data, textStatus, jqxhr) {
        console.log('script.js');
        $('body').append(data) ;
    });

   var v="";
        v += "<video poster=\"https:\/\/i.imgsafe.org\/b7bfcb6e7e.jpg\" id=\"bgvid\" playsinline autoplay muted loop data-state=\"playing\">";
        v += "<source src=\"https:\/\/www.dropbox.com\/s\/37idq1dfe09syx0\/background_loop.webm?dl=1\" type=\"video\/webm\">";
        v += "<source src=\"https:\/\/www.dropbox.com\/s\/11h3sttgfq37xf4\/background%20loop.mp4?dl=1\" type=\"video\/mp4\">";
        v += "<\/video>";

        $('.containerWrapper').prepend(v);
        $('body').css('background','rgba(0, 0, 0, 0.1)');


    loadCSS('https://mindsetsamurai.com/ClickFunnels-Optin-BackgroundVideo/style.css');
});
