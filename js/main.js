$(document).ready(function() {
  // header dropdown toggle
  $('.js-target-services').on('click', function (e) {
    $('.about').addClass('is-hide');
    $('.main, .services').addClass('is-show-first');
    setTimeout(function () {
        $('.services').addClass('is-show-second');
    }, 2500);
    e.preventDefault();
  });
});