$(".card-header").parent('.card').hover(
  function() {
    $(this).children('.collapse').collapse('show');
  }, function() {
    $(this).parent('.collapse').collapse('hide');
  }
);
