$(document).ready(function(){
    $("#sponsorship_text").click(function(e){
        e.preventDefault();
        $('#sponsorship_image.ui.modal').modal('show');
    });

    $("#mentorship_text").click(function(e){
        e.preventDefault();
        $('#mentorship_image.ui.modal').modal('show');
    });
});