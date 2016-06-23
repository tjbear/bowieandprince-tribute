// Start off hiding both Bowie and Prince sections

$('#about-bowie').hide();
$('#about-prince').hide();

$(document).ready(function() {
    
// When you click on #bowie-symbol show #about-bowie section and hide #about-prince section
    
    $('#bowie-symbol').click(function() {
        $(this).css('border-top', '4px solid rgba(240, 120, 122, .8)');
        $('#prince-symbol').css('border-top', '4px solid black');
        $('#about-bowie').show(); 
        $('#about-prince').hide();
    });
    
// When you click on #prince-symbol show #about-prince section and hide #about-bowie section
    
    $('#prince-symbol').click(function() {
        $(this).css('border-top', '4px solid rgba(133, 101, 210, .8)');
        $('#bowie-symbol').css('border-top', '4px solid black');
        $('#about-prince').show();
        $('#about-bowie').hide();
    });
    
// When you click on the bowie symbol show border bottom and hide prince symbol border bottom
// When you click on the prince symbol show border bottom and hide bowie symbol border bottom
    
});
