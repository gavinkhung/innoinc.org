// scroll magic
$(document).ready(function(){
    let controller = new ScrollMagic.Controller();
    $('.section').each(function(){
        new ScrollMagic.Scene({
            triggerElement: this
        })
        .setClassToggle(this, 'fade-in')
        .reverse(false)
        .addTo(controller);
    });
});


// tabbed
$('#newsletter .menu .item')
  .tab()
;
$('#about .menu .item')
  .tab()
;
$('#calendar .menu .item')
  .tab()
;