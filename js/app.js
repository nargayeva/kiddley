$('.carousel').carousel();
$('body').scrollspy({ target: '#navbar-example' });

$('.hamburger').click(function(){
    $('.menu-inside').show(2000);
});

$('.close').click(function(){
    $('.menu-inside').hide(2000);
});