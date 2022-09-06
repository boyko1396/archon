$(document).ready(function() {
  // toggle display
  $('.js-target-services').on('click', function (e) {
    $('.about').addClass('is-hide');
    $('.main, .services').addClass('is-show-first');
    setTimeout(function () {
        $('.services').addClass('is-show-second');
    }, 2500);
    e.preventDefault();
  });

  $('.js-target-wallet').on('click', function (e) {
    $('.wallet').addClass('is-show');
    $('.services').addClass('is-hide');
    $('.main').addClass('is-show-three');
  });
});