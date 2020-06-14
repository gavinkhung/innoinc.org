// scroll magic
$('.box').ready(function(){
    let controller = new ScrollMagic.Controller();
    $('.part').each(function(){
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