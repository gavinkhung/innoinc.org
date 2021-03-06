$(document).ready(function () {
  $('#conference_guidelines').click(function (e) {
    e.preventDefault();
    $('#conference_guidelines_image.ui.modal').modal('show');
  });
  $('#judging_guidelines').click(function (e) {
    e.preventDefault();
    $('#judging_guidelines_image.ui.modal').modal('show');
  });
  $('#schedule').click(function (e) {
    e.preventDefault();
    $('#schedule_image.ui.modal').modal('show');
  });

  $('#prospectus_text').click(function (e) {
    e.preventDefault();
    $('#prospectus_image.ui.modal').modal('show');
  });

  let controller = new ScrollMagic.Controller();
  $('.fade-up').each(function () {
    new ScrollMagic.Scene({
      triggerElement: this,
    })
      .setClassToggle(this, 'fade-up-active')
      .reverse(false)
      .addTo(controller);
  });
  $('.fade-up-slow').each(function () {
    new ScrollMagic.Scene({
      triggerElement: this,
    })
      .setClassToggle(this, 'fade-up-slow-active')
      .reverse(false)
      .addTo(controller);
  });
});
