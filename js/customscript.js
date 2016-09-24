$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 2]
      ]
  });
  
  var owl = $("#homeCarousel");
 
  owl.owlCarousel({
     singleItem : true, //10 items above 1000px browser width
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  });
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  });
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  });
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  });
 
});

