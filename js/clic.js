$(document).ready(function() {

  $( "#burger" ).click(function() {
    var $t = $('.nav');

    if ($t.is(':visible')) {
        $t.slideUp();
    } else {
        $t.slideDown();
    }
  });
});
