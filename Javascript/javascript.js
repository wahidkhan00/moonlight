// For event filter

$(document).ready(function(){
    $("#all").click(function(){
        $("#muslim-img").show();
        $("#christain-img").show();
         $("#hindu-img").show();
    })

    $("#muslim").click(function(){
        $("#muslim-img").show();
        $("#christain-img").hide();
         $("#hindu-img").hide();
    })

    $("#christain").click(function(){
        $("#muslim-img").hide();
        $("#christain-img").show();
         $("#hindu-img").hide();
    })

    $("#hindu").click(function(){
        $("#muslim-img").hide();
        $("#christain-img").hide();
         $("#hindu-img").show();
    })
})


// For scroll-top 

$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#scroll-up").fadeIn();
      } else {
        $("#scroll-up").fadeOut();
      }
    });
  
    $("#scroll-up").click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 100);
        return false;
    });
  
  });


  // For main-page owl-carousel 


  $('.owl-one').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

// For Modal owlCarousel

$('.owl-two').owlCarousel({
  loop:true,
  margin:20,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:1,
          nav:true,
          loop:false
      }
  }
})


// For Counter Up

$('.counter').counterUp({
  delay: 10,
  time: 10000
});


// For search Bar

$('[data-search]').on('keyup', function() {
	var searchVal = $(this).val();
	var filterItems = $('[data-filter-item]');

	if ( searchVal != '' ) {
		filterItems.addClass('hidden');
		$('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
	} else {
		filterItems.removeClass('hidden');
	}
});


// For Vistor Count

var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});






