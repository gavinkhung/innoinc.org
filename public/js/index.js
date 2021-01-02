// scroll magic
$(document).ready(function () {
  let controller = new ScrollMagic.Controller();
  $('.section').each(function () {
    new ScrollMagic.Scene({
      triggerElement: this,
    })
      .setClassToggle(this, 'fade-in')
      .reverse(false)
      .addTo(controller);
  });

  $('#hamburger-icon').click(function () {
    let hamburgerMenu = document.querySelector('#hamburger-menu');
    if (hamburgerMenu.style.display === 'block') {
      hamburgerMenu.style.display = 'none';
    } else {
      hamburgerMenu.style.display = 'block';
    }
  });
});

// tabbed
$('#newsletter .menu .item').tab();
$('#about .menu .item').tab();
$('#calendar .menu .item').tab();
