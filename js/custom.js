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
