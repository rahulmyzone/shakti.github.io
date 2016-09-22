$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
      items : 2, //10 items above 1000px browser width
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
  
  var owl = $("#homeCarousel");
 
  owl.owlCarousel({
      items : 1, //10 items above 1000px browser width
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
 
});