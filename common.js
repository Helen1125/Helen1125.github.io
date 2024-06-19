$(function(){
    $('.btn').on('click',function(){
        $('h1').addclass('red')
    })
})

$(function(){
    $('.btn-menu').on('click', function(){
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    })
})