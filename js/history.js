$(document).ready(function()
{
    $('.history img').click(function(){
        $(this).css("opacity", "0.4");
    })
    $('.history img').mouseleave(function(){
        $(this).css("opacity", "1");
    })
})