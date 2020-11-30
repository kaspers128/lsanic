// $('.herbal-content .features-show').on('click',function() {
//   $(this).siblings('.features-content').toggleClass('show')
// });

// if(window.innerWidth >= 768) {
//   var count = 0;

//   $('.herbal-content .features-show').on('mouseenter',function() {
//     $(this).siblings('.features-content').find('.herbal-jar').addClass('open');
//     $(this).siblings('.features-content').find('.herbal-jar__img-o').css({'animation': 'rotateJar 5s linear infinite'});
//   });

//   $('.herbal-content .features-show').on('mouseleave',function() {
//     $(this).siblings('.features-content').find('.herbal-jar').removeClass('open');
//     $(this).siblings('.features-content').find('.herbal-jar__img-o').css({'animation': ' '});
//   });
// }



$(window).on('load', function () {

  $(function () {

    if ($(window).width() <= 540) {
      $('.more-sheet').slick({
        dots: false,
        accessibility: false,
        arrows: true,
        infinite: false,
        speed: 300,
        prevArrow:'.sheet-prev',
        nextArrow:'.sheet-next',
        centerPadding: '0',
        slidesToShow: 1,
        centerMode: true
      });
    }
    $('.sheet-item').each(function () {
      

      var $this = $(this)

      if ($(window).width() >= 541) {
        $(this).css({
          'max-height': $('.sheet-item__info').outerHeight(true)
        })
      }
        
        $(this).on('click', function () {
          $(this).toggleClass('show-more');
        })

      
      

    })


  })

});


$(function () {
  $('.herbal-jar__img').on('click', function () {
    $(this).closest('.features-item').find('.features-show').trigger('click');
  });

  $('.herbal-content .features-show').on('click', function (e) {
    var $this = $(this);

    if (!$(this).hasClass('show')) {
      $this.addClass('show')
      $this.siblings('.features-content').find('.herbal-jar__img-o').css({
        'transform': 'rotate(360deg)'
      });
      $this.siblings('.features-content').find('.moveherbal').css({
        'transform': 'translateX(150%)'
      });

      setTimeout(function () {
        $this.siblings('.features-content').find('.moveherbal').css({
          'opacity': '0'
        });
        $this.siblings('.features-content').find('.left, .right').css({
          'opacity': '1'
        });
      }, 350);
      setTimeout(function () {
        $this.siblings('.features-content').find('.herbal-jar').hide(0)
      }, 700);

      $this.siblings('.features-content').find('.herbal-jar__img').css({
        'opacity': '0'
      });

    } else if ($(this).hasClass('show')) {
      $this.removeClass('show')

      $this.siblings('.features-content').find('.herbal-jar').show(0)

      $this.siblings('.features-content').find('.left, .right').css({
        'opacity': '0'
      });

      if (window.innerWidth >= 768) {
        $this.siblings('.features-content').find('.moveherbal').css({
          'transform': 'translateX(-50%)'
        });
      } else {
        $this.siblings('.features-content').find('.moveherbal').css({
          'transform': 'translateX(-0%)'
        });
      }


      setTimeout(function () {
        $this.siblings('.features-content').find('.moveherbal').css({
          'opacity': '1'
        });

      }, 150);
      setTimeout(function () {
        $this.siblings('.features-content').find('.herbal-jar__img').css({
          'opacity': '1'
        });

      }, 700);


      a = 0;
    }
  });
});

// niceScroll
$("html").niceScroll({
  horizrailenabled: false
});



var showPatches = $('.show-patches');

showPatches.on('click', function () {
  $(this).closest('.jar-item').toggleClass('open');
  var curr = $(this)
  setTimeout(function () {
    curr.closest('.jar-item').find('.jar-info').toggleClass('jar-info_show')
  }, 400);


});





// Menu Scroll to content and Active menu
var lastId,
  topMenu = $("#menu"),
  topMenuHeight = topMenu.outerHeight() + 145,
  menuItems = topMenu.find("a"),
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

$('a[href*=#]').on('click', function(e) {
  e.preventDefault();

  var target = $(this).attr("href");


  $('html, body').stop().animate({
    scrollTop: $(target).offset().top - 140
  }, 1000, function () {

  });

  return false;
});

$(window).scroll(function () {
  var fromTop = $(this).scrollTop() + topMenuHeight;
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop)
      return this;
  });

  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    menuItems
      .parent().removeClass("active")
      .end().filter("[href=#" + id + "]").parent().addClass("active");
  }
});


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

  $(".footer").css("position", "relative");
  $(".contact").css("marginBottom", "0");

} else {

  // FadeTo elements
  if ($(window).width() > 1023) {

    tiles = $(".section-title, .about-us__content, .herbal__text, .how-made, .how-made__list, .herbal-img, features-item, .recommend-box, .patch-ico, .patches-content__text .img, .jar, form, .efShow ").fadeTo(0, 0);

    $(window).scroll(function (d, h) {
      tiles.each(function (i) {
        a = $(this).offset().top + $(this).height();
        b = $(window).scrollTop() + $(window).height();
        if (a < b) $(this).fadeTo(1000, 1);
      });
    });

  }

}



//Menu mobile click
$(".icon").click(function () {
  $(" ul.menu-click").slideToggle("slow", function () {
    // Animation complete.
  });
});


$(window).load(function () {

  $(".preloader").delay(1000).fadeOut("slow");

  // //carusel
  // $('.ofapp_carusel').slick({
  //   adaptiveHeight: true,
  //   arrows: false,
  //   autoplay: true,
  //   respondTo: 'slider'
  // });

  // Parallax
  if ($('.header-screen').length) {
    $(".header-screen").parallax("50%", 0.4, true);
  }

  // Parallax
  if ($('.parallax-background-partners1').length) {
    $(".parallax-background-partners1").parallax("50%", 0.4, true);
  }

  // Parallax
  if ($('.parallax-background-partners2').length) {
    $(".parallax-background-partners2").parallax("50%", 0.4, true);
  }


  // Move imgs patches2
  //red
  $('.upper_red_pic, .u_red_button').click(function () {
    $('.bottom_red').fadeIn(1600);
    $('.upper_red').animate({
      left: "-1100px"
    }, 1200);
  });
  $('.bottom_red_pic, .b_red_button').click(function () {
    $('.bottom_red').fadeOut(1600);
    $('.upper_red.desktop').animate({
      left: "194px"
    }, 1200);
    $('.upper_red.mobile').animate({
      left: "0"
    }, 1200);
  });
  //blue
  $('.upper_blue_pic, .u_blue_button').click(function () {
    $('.bottom_blue').fadeIn(1600).css("display", "inline-block");
    $('.upper_blue').animate({
      left: "-1100px"
    }, 1200);
  });
  $('.bottom_blue_pic, .b_blue_button').click(function () {
    $('.bottom_blue').fadeOut(1600);
    $('.upper_blue.desktop').animate({
      left: "158px"
    }, 1200);
    $('.upper_blue.mobile').animate({
      left: "0"
    }, 1200);
  });
  //yellow
  $('.upper_yellow_pic, .u_yellow_button').click(function () {
    $('.bottom_yellow').fadeIn(1600);
    $('.upper_yellow.desktop').animate({
      right: "-1100px"
    }, 1200);
    $('.upper_yellow.mobile').animate({
      left: "-1100px"
    }, 1200);
  });
  $('.bottom_yellow_pic, .b_yellow_button').click(function () {
    $('.bottom_yellow').fadeOut(1600);
    $('.upper_yellow.desktop').animate({
      right: "230px"
    }, 1200);
    $('.upper_yellow.mobile').animate({
      left: "0"
    }, 1200);
  });
  //black
  $('.upper_black_pic, .u_black_button').click(function () {
    $('.bottom_black').fadeIn(1600).css("display", "inline-block");
    $('.upper_black.desktop').animate({
      right: "-1100px"
    }, 1200);
    $('.upper_black.mobile').animate({
      left: "-1100px"
    }, 1200);
  });
  $('.bottom_black_pic, .b_black_button').click(function () {
    $('.bottom_black').fadeOut(1600);
    $('.upper_black.desktop').animate({
      right: "223px"
    }, 1200);
    $('.upper_black.mobile').animate({
      left: "0"
    }, 1200);
  });
});

$(function () {
  if ($(window).width() <= 767) {
    $("#ofapppic").each(function () {
      $(this).attr("src", $(this).attr("src").replace("img/skin.png", "img/offapp.png"));
    });
  }
});

$(function () {
  if ($(window).width() > 768) {
    $("#ofapppic").each(function () {
      $(this).attr("src", $(this).attr("src").replace("img/offapp.png", "img/skin.png"));
    });
  }
});

$(function () {
  if ($(window).width() <= 767) {
    //carusel
    $('.recommend-box').slick({
      arrows: false,
      autoplay: true,
      responsive: [{
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }
});

$(function () {
  if ($(window).width() <= 767) {
    //carusel
    $('.ofapp-imgs, .how-to-use__inner').slick({
      arrows: false,
      autoplay: true,
      slidesToShow: 3,
      responsive: [{
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

  }
  
});

$(function () {
  if ($(window).width() > 768) {
    // Stick menu
    $(".menu").sticky({
      topSpacing: 0
    });
    $('.menu-list li').hover(function (e) {
      clearTimeout($.data(this,'timer'));
      $('ul',this).stop(true,true).slideDown(200);
    }, function () {
      $.data(this,'timer', setTimeout($.proxy(function() {
        $('ul',this).stop(true,true).slideUp(200);
      }, this), 100));
    });
    $('.ofapp2_carusel').removeClass('ofapp2_carusel');
    $("#jarmain").attr("src", "img/jar.gif")
  }
});

$('.burger').on('click', function (e) {
  $('.menu-list').slideToggle()
});

$('.menu-list__link').on('click', function (e) {
  $(this).parent().find('.submenu').slideToggle();
});

$('.action-content__link').on('click', function (e) {
  e.preventDefault();
  let actionBlock = $(this).attr('data-action');
  $(`.${actionBlock}`).addClass('active');
})

$('.closeAction').click(function(e){
  $('.action-desc__item').removeClass('active');
})

$(document).on('scroll', function () {
  if (scrollY > 20 && $(window).width() <= 767) {
    $('.menu-list').slideUp();
  }
  $('.submenu').slideUp();
})