/*click*/

$('.js-callback').click(function () {
	/*$('main').css('filter','blur(5px)');*/
	$('.wrapper').fadeIn();
	$('.wrapper').addClass('disabled');
});

/*close*/


$('.close-popup').click(function() {
	$('.wrapper').fadeOut();
	/*$('main').css('filter', 'none');*/
});



/*shopping-cart*/

$('.basket').click(function () {
	/*$('main').css('filter','blur(5px)');*/
	$('.cart').fadeIn();
	$('.cart').addClass('disabled');
	$('.h1').fadeOut();
	$('.section').fadeOut();
});
$('.close-popup-cart').click(function() {
	$('.cart').fadeOut();
	$('.h1').fadeIn();
	$('.section').fadeIn();
	/*$('main').css('filter', 'none');*/
});


/*like-btn*/
$('.like-btn').on('click', function() {
   $(this).toggleClass('is-active');
});


/*info-btn*/

$('.info-icon').on('click', function() {
   $('.info').fadeIn();
});
$('.close').on('click', function() {
   $('.info').fadeOut();
});

$('.info-icon-1').on('click', function() {
   $('.info-1').fadeIn();
});
$('.close').on('click', function() {
   $('.info-1').fadeOut();
});

$('.info-icon-2').on('click', function() {
   $('.info-2').fadeIn();
});
$('.close').on('click', function() {
   $('.info-2').fadeOut();
});

$('.info-icon-3').on('click', function() {
   $('.info-3').fadeIn();
});
$('.close').on('click', function() {
   $('.info-3').fadeOut();
});

$('.info-icon-4').on('click', function() {
   $('.info-4').fadeIn();
});
$('.close').on('click', function() {
   $('.info-4').fadeOut();
});

$('.info-icon-5').on('click', function() {
   $('.info-5').fadeIn();
});
$('.close').on('click', function() {
   $('.info-5').fadeOut();
});

$('.info-icon-6').on('click', function() {
   $('.info-6').fadeIn();
});
$('.close').on('click', function() {
   $('.info-6').fadeOut();
});

$('.info-icon-7').on('click', function() {
   $('.info-7').fadeIn();
});
$('.close').on('click', function() {
   $('.info-7').fadeOut();
});

/*product-quantity*/

function addHandlers(product_quantity) {
	let decrementBtn = product_quantity.querySelector(".minus-btn");
	let number = product_quantity.querySelector(".number-of-order");
	let incrementBtn = product_quantity.querySelector(".plus-btn");

	let minCount = 1;
	let maxCount = 10;

	let currentValue = +number.value;

	toggleButtonState(currentValue)

	function toggleButtonState(count) {
		decrementBtn.disabled = count <=minCount;
		incrementBtn.disabled = count >=maxCount;
	}

		incrementBtn.addEventListener("click", function(){
			number.value++;
			toggleButtonState(number.value)
		});
		decrementBtn.addEventListener("click", function(){
			number.value--;
			toggleButtonState(number.value)
		});
}
let counts = document.querySelectorAll(".order-amount");
counts.forEach(addHandlers);



/*up-button*/
$(document).ready(function(){
    // hide #back-top first
    $("#back-top").hide();
    
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});


/*увеличения количества товаров в корзине*/

let productsCountEl = document.getElementById('products-count');

let addToCartButtons = document.querySelectorAll('.view');

for(let i=0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", function(){
		let prevProductsCount = +productsCountEl.textContent;
		productsCountEl.textContent = prevProductsCount + 1;
	})
}


/*Burger-menu*/


function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu__button');
	let links = menu.find('.burger-menu__link');
	let overlay = menu.find('.burger-menu__overlay');

	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());

	function toggleMenu() {
		menu.toggleClass('burger-menu_active');

		if(menu.hasClass('burger-menu_active')){
			$('body').css('overflow','hidden');
		} else{
			$('body').css('overflow','visible')
		}
	}
}

burgerMenu('.burger-menu')


/*slider*/

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:1
  });
});