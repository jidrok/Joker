$(document).ready(function () {
  let tabsItem = $('.tabs-item')

  tabsItem.on('click', function(event){
    event.preventDefault();
    let activContent = $(this).attr('href');
    $('.visible').toggleClass('visible');
    $(activContent).toggleClass('visible');
    $('.tabs-item-active').toggleClass('tabs-item-active');
    $(this).toggleClass('tabs-item-active');

  });

});

var divs = $('.search'),
    layer = $('#layer');
divs.click(function(){
    divs.css('z-index',0);
    $(this).css('z-index',10);
    layer.fadeIn('fast');
});

layer.click(function(){
    $(this).fadeOut('fast');
});
 
/* disable all links on the page: отключение всех ссылок на странице */
$('a').on('click', function (e) { e.preventDefault() })