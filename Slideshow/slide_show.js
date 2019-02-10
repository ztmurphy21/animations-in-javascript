$(document).ready(function() {
    //create array of the slide images
    var image, imageCache = [];
    $("#slides img").each(function(){
        image = new Image();
        image.src = $(this).attr("src");
        image.title = $(this).attr("alt");
        imageCache.push( image );
    });
    //start the slide show up
    var imageCounter = 0;
    var nextImage;
    var timer = setInterval(
        function (){
            $("#caption").fadeOut(1000);
            $("#slide").fadeOut(1000,
                function (){
                    imageCounter = (imageCounter +1) % imageCache.length;
                    nextImage = imageCache[imageCounter];
                    $("#slide").attr("src", nextImage.src).fadeIn(1000);
                    $("#caption").text(nextImage.title).fadeIn(1000);
                });
        },
    3000);
})