

function loadListeners(){
    $('.exploreHeader').on("click", function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1000);   
    });
}



$(loadListeners);