$(function(){
	$(window).scroll(function(){
			$('.about-me__title').each(function(){
				var imagePos = $(this).offset().top;

				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+650) {
					$(this).addClass("animate__flipInX")
				}
			});
	});
	$(window).scroll(function(){
			$('.text').each(function(){
				var imagePos = $(this).offset().top;

				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+650) {
					$(this).addClass("animate__slideInRight")
				}
			});
	});
	$(window).scroll(function(){
			$('.skills__title').each(function(){
				var imagePos = $(this).offset().top;

				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+650) {
					$(this).addClass("animate__flipInX")
				}
			});
	});
	$(window).scroll(function(){
			$('.skill').each(function(){
				var imagePos = $(this).offset().top;

				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+650) {
					$(this).addClass(" animate__zoomIn")
				}
			});
	});
	$(window).scroll(function(){
			$('.jobs__title').each(function(){
				var imagePos = $(this).offset().top;

				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+650) {
					$(this).addClass("animate__flipInX")
				}
			});
	});
	$(window).scroll(function(){
			$('.connection').each(function(){
				var imagePos = $(this).offset().top;

				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+650) {
					$(this).addClass("animate__flipInX")
				}
			});
	});
	$(window).scroll(function(){
			$('.sites').each(function(){
				var imagePos = $(this).offset().top;

				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+650) {
					$(this).addClass("animate__jackInTheBox")
				}
			});
	});
});