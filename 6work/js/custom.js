$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
 
    $('header').addClass('fadeInDown animated').css('animation-delay', '0.2s');
    if(window.innerWidth>1023){
        new WOW().init({
            mobile:false
        });
    }
    
});

$(document).ready(function(){
    
    $('.js-top-slider').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        autoplay:true,
        appendArrows:'.top-slider-arrows .wrapper'
    });    
    
    /*fixed header*/
	function showDiv() {
		if ($(window).scrollTop() > 0) {			
			$("#header").addClass('fixed');
		}else {
            $("#header").removeClass('fixed');			
		}
	}
    showDiv();
	$(window).scroll(showDiv);	
	/*fixed header*/
	
	/* smooth scroll to anchor*/
	 $('.scroll').click(function() { 
         $.fancybox.close();
		  var target = $(this.hash);
		  if (target.length) {
			var tt= target.offset().top;	
			var wid=window.innerWidth;
			
			if (wid < 481){
				tt=tt-40;	
			}			 		 
			$('html, body').animate({
			  scrollTop: tt
			}, 1500);			
			return false;
		  }	   
	  });
    /* smooth scroll to anchor*/    
    
    /* set active menu item*/
    
	function activeSection(el){				
        
        if(window.innerWidth>480){
            tt=$(el).offset().top;
        }else{
           tt=$(el).offset().top - 84; 
        }        
        
		if ($(this).scrollTop() >= tt && $(this).scrollTop() <= tt + $(el).height()) {
			$('.nav-item__link').removeClass('active');			
			$("a[href='" + el + "']").addClass('active');
		}
	}
	activeSection('#top');
	activeSection('#about');
	activeSection('#team');
	activeSection('#news');
	activeSection('#why');
	activeSection('#reviews');
	
	$(window).scroll(function(event){
      	activeSection('#top');
        activeSection('#about');
        activeSection('#team');
        activeSection('#news');
        activeSection('#why');
        activeSection('#reviews');
	});
	/* set active menu item*/
    
    $('[data-fancybox]').fancybox({
        touch: false,
        closeExisting: true,
        afterShow : function( instance, current ) {
            
        }
    });
    
    $('.js-slider-photo').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:false,
        autoplay:false,
        appendArrows:'.block-slider-photo .slider-arrows-wrapper'
    }); 
   
    
    $('.js-slider-news').slick({
        infinite: false,
        arrows:true,
        dots:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade:false,
        autoplay:false,
        appendArrows:'.block-slider-news .slider-arrows-wrapper',
        responsive: [
            {
                breakpoint: 900,
                settings: "unslick"
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, 
                    adaptiveHeight:true
                }
            },
        ]
    }); 
     
    $('.js-slider-advantages').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade:false,
        autoplay:false,
        appendArrows:'.block-slider-advantages .slider-arrows-wrapper',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    adaptiveHeight:true
                }
            },{
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight:true
                }
            },
        ]
    }); 
    
    $('.js-slider-team').slick({
        infinite: true,
        arrows:false,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        autoplay:false,   
        asNavFor: '.js-slider-team-photo', 
        responsive: [
            
            {
                breakpoint: 992,
                settings: {
                    adaptiveHeight:true
                }
            },
        ]
    }); 
    
    $('.js-slider-team-photo').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        autoplay:false,
        focusOnSelect: true,
        asNavFor: '.js-slider-team', 
        appendArrows:'.block-slider-team-photo .slider-arrows-wrapper',
        responsive: [
            
            {
                breakpoint: 992,
                settings: {
                    adaptiveHeight:true
                }
            },
        ]
    }); 
    
    $('.js-slider-reviews').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        autoplay:false,
        appendArrows:'.block-slider-reviews .slider-arrows-wrapper',
        responsive: [
            
            {
                breakpoint: 992,
                settings: {
                    adaptiveHeight:true
                }
            },
        ]
    }); 
    
    $('.js-slider-about').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:false,
        autoplay:false,
        appendArrows:'.block-about__col .slider-arrows-wrapper',
        responsive: [
            
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2, 
                    adaptiveHeight:true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1, 
                    adaptiveHeight:true
                }
            },
        ]
    }); 
    
    $(window).on('resize orientationchange', function() {
      $('.js-slider-about').slick('resize');
    });
     
    $('.js-slider-factory').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:false,
        autoplay:false,
        appendArrows:'.block-slider-factory .slider-arrows-wrapper'
    }); 
    
    $(".form-phone").mask("+7 (999) 999-99-99");
    
    $("#form-contact").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				name: "required",
				phone: "required",
                email: {
					required: true,
					email: true
				},
				city: "required"
			},
			messages: {
				name: "РќРµРѕР±С…РѕРґРёРјРѕ Р·Р°РїРѕР»РЅРёС‚СЊ РРјСЏ",
				phone: "РќРµРѕР±С…РѕРґРёРјРѕ Р·Р°РїРѕР»РЅРёС‚СЊ РўРµР»РµС„РѕРЅ",
				email: {
					required: "РќРµРѕР±С…РѕРґРёРјРѕ Р·Р°РїРѕР»РЅРёС‚СЊ E-mail",
					email: "Р’РІРµРґРёС‚Рµ РєРѕСЂСЂРµРєС‚РЅС‹Р№ E-mail"
				},				
                city: "РќРµРѕР±С…РѕРґРёРјРѕ Р·Р°РїРѕР»РЅРёС‚СЊ Р“РѕСЂРѕРґ"				
			},
            submitHandler:  function(form) { 
                form.submit(); 
            }
     });
    
    
    $("#form-contact-2").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				name: "required",
				phone: "required"                
			},
			messages: {
				name: "РќРµРѕР±С…РѕРґРёРјРѕ Р·Р°РїРѕР»РЅРёС‚СЊ РРјСЏ",
				phone: "РќРµРѕР±С…РѕРґРёРјРѕ Р·Р°РїРѕР»РЅРёС‚СЊ РўРµР»РµС„РѕРЅ",		
			},
            submitHandler:  function(form) { 
            form.submit(); 
        }
     });
    
    $("#form-contact-3").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				name: "required",
				phone: "required",
                email: {
					required: true,
					email: true
				},
				comment: "required"
			},
			messages: {
				name: "РќРµРѕР±С…РѕРґРёРјРѕ Р·Р°РїРѕР»РЅРёС‚СЊ РРјСЏ",
				phone: "РќРµРѕР±С…РѕРґРёРјРѕ Р·Р°РїРѕР»РЅРёС‚СЊ РўРµР»РµС„РѕРЅ",
				email: {
					required: "РќРµРѕР±С…РѕРґРёРјРѕ Р·Р°РїРѕР»РЅРёС‚СЊ E-mail",
					email: "Р’РІРµРґРёС‚Рµ РєРѕСЂСЂРµРєС‚РЅС‹Р№ E-mail"
				},				
                comment: "РќРµРѕР±С…РѕРґРёРјРѕ Р·Р°РїРѕР»РЅРёС‚СЊ РљРѕРјРјРµРЅС‚Р°СЂРёР№"					
			},
            submitHandler:  function(form) { 
            form.submit(); 
        }
     });
    
   
    
 });
