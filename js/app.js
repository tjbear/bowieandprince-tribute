$('#about-bowie').hide();
$('#about-prince').hide();

$(document).ready(function() {
      
    $('#bowie-symbol').click(function() {
        $(this).css('border-top', '4px solid rgba(240, 120, 122, .8)');
        $('#prince-symbol').css('border-top', '4px solid black');
        $('#about-bowie').show(); 
        $('#about-prince').hide();
    });
    

    
    $('#prince-symbol').click(function() {
        $(this).css('border-top', '4px solid rgba(133, 101, 210, .8)');
        $('#bowie-symbol').css('border-top', '4px solid black');
        $('#about-prince').show();
        $('#about-bowie').hide();
    });
    
});
