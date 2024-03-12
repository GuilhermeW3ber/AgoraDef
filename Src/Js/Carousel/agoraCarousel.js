$(document).ready(function() {

  var owl = $("#owl-demo");

  owl.owlCarousel({  

    slideSpeed : 200,
    paginationSpeed : 800,

    autoPlay : false,
    goToFirst : true,
    goToFirstSpeed : 1000,
    
    navigation : false,
    navigationText : ["prev","next"],
    pagination : true,
    
    responsive: true,
    items : 3,
    itemsDesktop : [1400,3],
    itemsTablet: [1200,3],
    itemsMobile : [700,1],

  });
});
