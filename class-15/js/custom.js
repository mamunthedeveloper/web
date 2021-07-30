$(function (){

      
 
 

  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 50){
      $(".back_to_top i").fadeIn(500)
    }
    else{
      $(".back_to_top i").fadeOut(500)
    }
    if(scrolling > 100){
      $(".head").addClass("nav_bg")
    }
    else{
      $(".head").removeClass("nav_bg")
    }
  })
   
 

     $(".back_to_top i").click(function (){
       $('html, body').animate({
         scrollTop:0
       },200)
     })

       
    



  

    $('.my_service_main_item').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ".before",
        nextArrow: ".after"
        
      });

      var mixer = mixitup('.port_img');

      $('.test_main').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: ".prev",
        nextArrow: ".next"
        
      });
});