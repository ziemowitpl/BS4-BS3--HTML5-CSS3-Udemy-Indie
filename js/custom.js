// ==========================================
//                 SERVICES
// ==========================================
$(function() {
    // animated on scroll
    new WOW().init();
});
// ==========================================
//                 SERVICES
// ==========================================
$(document).ready(function() {
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery:{
            enabled:true
          }
    });
  });


// ==========================================
//                 TEAM
// ==========================================

  $(document).ready(function() {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
  });
// ==========================================
//                 TESTIMONIALS
// ==========================================

  $(document).ready(function() {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
  });

// ==========================================
//                 COUNTER
// ==========================================
$(document).ready(function() {
  $('.counter').counterUp({
    delay: 10,
    time: 2000
});

});

// ==========================================
//                 CLIENT OWL CAROUSEL
// ==========================================

$(document).ready(function() {
  $("#clients-list").owlCarousel({
      items: 6,
      autoplay: true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true
  });
});

// ==========================================
//                 NAVIGATION BACKGROUND
// ==========================================
$(document).ready(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() < 50) {
      // hide nav
      $("nav").removeClass("my-top-nav");
      // back-to-top fixed button
      $("#back-to-top").fadeOut();
    }
    else
    {
      $("nav").addClass("my-top-nav");
      $("#back-to-top").fadeIn();
    }
  });
});
// Smooth scrolling
$(document).ready(function() {
  $("a.smooth-scroll").click(function(event){
    event.preventDefault();

    // get/return id like #about,#work, #team etc
    var section = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section).offset().top - 64
      // easeInOutExpo - easing effect
    }, 1250, "easeInOutExpo");
  });
});
