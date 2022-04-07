$(function(){
    $('button').click(function(){
        $('.menu').css({display:'block'});
    });
})
$(function(){
    $('.menu li').mouseover(function(){
        $(this).css({backgroundColor:'red'});
    }).mouseout(function(){
        $(this).css({backgroundColor:'white'});
    });
});