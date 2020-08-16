$(document).ready(function(){
    $("#guidelines_text").click(function(e){
        e.preventDefault();
        $('#guidelines_image.ui.modal').modal('show');
    });

    $("#prospectus_text").click(function(e){
        e.preventDefault();
        $('#prospectus_image.ui.modal').modal('show');
    });
});