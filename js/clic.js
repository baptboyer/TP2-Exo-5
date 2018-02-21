$(document).ready(function() {

  $( "#logo" ).click(function() {
    var $t = $('.nav');

    if ($t.is(':visible')) {
        $t.slideUp();
        // Other stuff to do on slideUp
    } else {
        $t.slideDown();
        // Other stuff to down on slideDown
    }
  });
});
