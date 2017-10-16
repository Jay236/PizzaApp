

var app = angular.module("PizzaApp", ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl:'./templates/home.html'
	})
	
	.when('/deals',{
		templateUrl:'./templates/deals.html'
	})
    .when('/ownpizza',{
        templateUrl:'./templates/OwnPizza.html'
    });

});

app.controller('carouselCtrl', ['$scope', function ($scope)
    {


        // invoke the carousel

        $('#myCarousel').carousel({
            interval: 3000
        });

        // scroll slides on mouse scroll

        $('#myCarousel').bind('mousewheel DOMMouseScroll', function (e)
        {

            if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0)
            {
                $(this).carousel('prev');


            }
            else
            {
                $(this).carousel('next');

            }
        });

        // / scroll slides on mouse scroll /

        $('#myCarousel').bind('mousewheel DOMMouseScroll', function (e)
        {

            if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0)
            {
                $(this).carousel('prev');


            }
            else
            {
                $(this).carousel('next');

            }
        });

//to add  start animation on load for first slide
        $(function ()
        {
            $.fn.extend({
                animateCss: function (animationName)
                {
                    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                    this.addClass('animated ' + animationName).one(animationEnd, function ()
                    {
                        $(this).removeClass(animationName);
                    });
                }
            });
            $('.item1.active img').animateCss('slideInDown');
            $('.item1.active h2').animateCss('zoomIn');
            $('.item1.active p').animateCss('fadeIn');

        });

//to start animation on  mousescroll , click and swipe



        $("#myCarousel").on('slide.bs.carousel', function ()
        {
            $.fn.extend({
                animateCss: function (animationName)
                {
                    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                    this.addClass('animated ' + animationName).one(animationEnd, function ()
                    {
                        $(this).removeClass(animationName);
                    });
                }
            });

// add animation type  from animate.css on the element which you want to animate

            $('.item1 img').animateCss('slideInDown');
            $('.item1 h2').animateCss('zoomIn');
            $('.item1 p').animateCss('fadeIn');

            $('.item2 img').animateCss('slideInDown');
            $('.item2 h2').animateCss('zoomIn');
            $('.item2 p').animateCss('fadeIn');

            $('.item3 img').animateCss('slideInDown');
            $('.item3 h2').animateCss('zoomIn');
            $('.item3 p').animateCss('fadeIn');
        });




    }]);
            // slider & scroll up

app.controller('MainCtrl', ['$scope', function($scope){

    $(window).on('scroll', function(){
        var scroll = $(window).scrollTop();
        if(scroll < 245){
            $('#sticky-header').removeClass("sticky");  

        }
        else{
             $('#sticky-header').addClass("sticky");  

        }
    });


    
    $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

$("#send").click(function(){
  (function(){
      emailjs.init("user_jY0afhRYaSk2r0hFmQTzM");
   })();
  emailjs.send("jaychander36_gmail_com","template_XzYgdsGv",{name: "James", notes: "Check this out!"});

});
   

}]);


