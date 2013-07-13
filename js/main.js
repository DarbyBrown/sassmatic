var backgrounds = { 
  1:'http://s.cdpn.io/31787/duck.png',
  2:'http://s.cdpn.io/31787/nick-cage.jpeg',
  3:'http://s.cdpn.io/31787/burger.jpg',
  4:'http://s.cdpn.io/31787/sea.png',
  5:'http://s.cdpn.io/31787/chris-w.png',
  6: 'http://s.cdpn.io/31787/shelby.png'
};
 $("li").click(function(){
 var id = $(this).attr('id').replace(/button/, '');
  $("div, figcaption").removeAttr('class');
 $("div").addClass('filter'+id);
 $("figcaption").addClass('caption'+id);
});

$('.arrow-right').click(function(){
 var next;
 current = $('.polaroid div img').attr('src');
 
 $.each(backgrounds, function(index, url) {
   if(url == current) {
     if (Object.keys(backgrounds).length == index) {
       next = 1;
     } else {
       index = parseInt(index);
       next = index+1;
     }
   }
 });
 $('li').css('background-image', 'url('+backgrounds[next]+')');
 $('.polaroid div img').attr('src', backgrounds[next]);
});
                                 
$('.arrow-left').click(function(){
 var last;
 current = $('.polaroid div img').attr('src');
 
 $.each(backgrounds, function(index, url) {
   if(url == current) {
     if (1 == index) {
       last = Object.keys(backgrounds).length;
     } else {
       index = parseInt(index);
       last = index-1;
     }
   }
 });
 $('li').css('background-image', 'url('+backgrounds[last]+')');
 $('.polaroid div img').attr('src', backgrounds[last]);
});

$(document).ready(function() {
   $.each(backgrounds, function(index, img){
    $('<img/>')[0].src = img;
   });
});