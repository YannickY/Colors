$(function() {

    $(".body").on("mousemove", function(e) {
        $(this).css("background-color", `rgb(${e.pageX}, ${e.pageY}, ${e.screenY})` );

    

    });

    
   

});