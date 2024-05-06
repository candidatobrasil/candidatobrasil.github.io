$(document).ready(function(){
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        
        if(target.length) {
            console.log("oi")
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 100);
        }
    });

    $(".go-to-start").click(function() {
        $("ul.nav a").removeClass("active").attr("aria-selected", "false");
        $("#home-tab").addClass("active").attr("aria-selected", "true").click();
    });
});