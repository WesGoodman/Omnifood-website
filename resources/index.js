$("document").ready(function(){
   $('.js--section-features').waypoint(function(direction){
       if (direction == "down") {
           $("nav").addClass("sticky");
       } else {
           $("nav").removeClass("sticky");
       }
    }, {
        offset: '25%'
      });

    $(".js--scroll-to-plan").click(function(){
        $("html, body").animate({scrollTop: $(".js--section-plan").offset().top}, 1000)
    });

    $(".js--scroll-to-start").click(function(){
        $("html,body").animate({scrollTop: $(".js--section-features").offset().top}, 1000)
    });


    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top;
    
        $("body, html").animate({
            scrollTop: position
        } (1000) );
    });

    $(".js--wp-1").waypoint(function(direction){
        $(".js--wp-1").addClass("animated fadeIn");
    }, {
        offset: '50%'
      });

    $(".js--wp-2").waypoint(function(direction){
        $(".js--wp-2").addClass("animated slideInUp");
    }, {
        offset: '50%'
      });

    $(".js--wp-3").waypoint(function(direction){
        $(".js--wp-3").addClass("animated fadeIn");
    }, {
        offset: '50%'
      });

    $(".js--wp-4").waypoint(function(direction){
        $(".js--wp-4").addClass("animated pulse");
    }, {
        offset: '50%'
      });


});
/*
var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window') 
  }, {
    offset: '25%'
  })*/