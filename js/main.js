$(function () {
  "use strict";
  $(window).on("load", function (event) {
    $(".preloader").delay(500).fadeOut(500);
  });

  $("#search").on("click", function () {
    $(".search-box").fadeIn(600);
  });
  $(".closebtn").on("click", function () {
    $(".search-box").fadeOut(600);
  });

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });

  var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");

  if (subMenu.length) {
    subMenu
      .parent("li")
      .children("a")
      .append(function () {
        return '<button class="sub-nav-toggler"> <i class="fa fa-chevron-down"></i> </button>';
      });

    var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");

    subMenuToggler.on("click", function () {
      $(this).parent().parent().children(".sub-menu").slideToggle();
      return false;
    });
  }
  

    

  //====== Magnific Popup

  $(".video-embd").magnificPopup({
    type: "iframe",
  });


  //===== Back to top
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });

  $(".back-to-top").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
  });
});
// function googleTranslateElementInit() {
//   new google.translate.TranslateElement(
//     { pageLanguage: "en" },
//     "google_translate_element"
//   );
// }
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "hi,en",
      autoDisplay: false,
    },
    "google_translate_element"
  );
}
$(function(){
  $('.inc').on('click',function(){
    var currentSize = $("p").css("font-size");
    var currentSizeNum = parseFloat(currentSize);
    var newSize = currentSizeNum*1.1;
    $("p").css("font-size",newSize);
  });
  $('.dec').on('click',function(){
    var currentSize = $("p").css("font-size");
    var currentSizeNum = parseFloat(currentSize);
    var newSize = currentSizeNum*0.9;
    $("p").css("font-size",newSize);
  });
  var currentSize = $("p").css("font-size");
  $('.reset').on("click",function(){
    $("p").css("font-size",currentSize);
  });
});
$(document).ready(function(){
  $('.gallerys').magnificPopup({
    type:'image',
    delegate: 'a',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled:true,
      navigateByImgClick: true,
      preload: [0,1],
    },
    image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Vibhanshu Garg & Prateek Upadhyay MNIT</small>';
			}
		}
  });
});

$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});
$(function () {
  var messages = [],
      index = 0;

  messages.push('Malaviya National Institute Of Technology Jaipur');
  messages.push('मालवीय राष्ट्रीय प्रौद्योगिकी संस्थान जयपुर');
  

  function cycle() {
      $('#heading-id').html(messages[index]);
      index++;

      if (index === messages.length) {
          index = 0;
      }

      setTimeout(cycle, 2000);
  }

  cycle();
});

$(document).ready(function(){

  $("#dept-slider").owlCarousel({
    loop:true,
    dots: true,
    margin: 10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
});

$(document).ready(function(){
  $("#infra-slider1").owlCarousel({
    loop:true,
    dots: true,
    margin: 10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
  $("#infra-slider2").owlCarousel({
    loop:true,
    dots: true,
    margin: 10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
  $("#infra-slider3").owlCarousel({
    loop:true,
    dots: true,
    margin: 10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
  $("#ataglance").owlCarousel({
    loop:true,
    dots: true,
    margin: 10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$("#mediaCarousel").owlCarousel({
  loop:true,
  dots: true,
  margin: 10,
  nav:true,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})

});
$("#pressCarousel").owlCarousel({
  loop:true,
  dots: true,
  margin: 10,
  nav:true,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})


$('.counters').each(function () {
  var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
  $(this).prop('Counter', 0).animate({
     Counter: $(this).text()
  }, {
     duration: 7000,
     step: function (func) {
        $(this).text(parseFloat(func).toFixed(size));
     }
  });
});

document.addEventListener("DOMContentLoaded", function(){
  /////// Prevent closing from click inside dropdown
  document.querySelectorAll('.dropdown-menu').forEach(function(element){
    element.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  })
}); 

$(document).ready( function () {
  $('#minuteTable').DataTable();
});
$(document).ready( function () {
  $('#eventTable').DataTable();
  $('#newsletterTable').DataTable();
  $('#magazineTable').DataTable();
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 600) {
    $('#top-nav').fadeIn();
  } else {
    $('#top-nav').fadeOut();
  }
});
    
