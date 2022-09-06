$(document).ready(function() {
  // header dropdown toggle
  $('.js-target-services').on('click', function (e) {
    $('.services').addClass('is-show');
    e.preventDefault();
  });
});