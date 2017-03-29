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
   v += "<video poster=\"https:\/\/mindsetsamurai.com\/ClickFunnels-Optin-BackgroundVideo\/video\/minsetsamurai_big.jpg\" id=\"bgvid\" playsinline autoplay muted loop data-state=\"playing\">";
   v += "<source src=\"https:\/\/mindsetsamurai.com\/ClickFunnels-Optin-BackgroundVideo\/video\/v1.mp4?v=2\" type=\"video\/webm\">";
   v += "<source src=\"https:\/\/mindsetsamurai.com\/ClickFunnels-Optin-BackgroundVideo\/video\/v1.webm?v=2\" type=\"video\/mp4\">";
   v += "<\/video>";


        $('.containerWrapper').prepend(v);
        $('body').css('background','rgba(0, 0, 0, 0.1)');


    loadCSS('https://mindsetsamurai.com/ClickFunnels-Optin-BackgroundVideo/style.css');
});
