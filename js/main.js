$("#work").click(function() {
    $('html,body').animate({
        scrollTop: $("#work-section").offset().top - 50
      },
      'slow');
      return false;
});

$("#contact").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact-section").offset().top - 50
      },
      'slow');
      return false;
});