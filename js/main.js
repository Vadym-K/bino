$('.carousel-slick').slick({
	// autoplay: true,
	// autoplaySpeed: 3000,
	infinite: true,
	dots: false,
	arrows: true
});

$(".carousel-slick-vertical").slick({
	infinite: true,
	dots: true,
	arrows: false,
	vertical: true,
	verticalSwiping: true,
	initialSlide: 1
});

$('.carousel-slick-third').slick({
	autoplay: true,
	autoplaySpeed: 3000,
	vertical: false,
	infinite: true,
	dots: true,
	arrows: false
});

$(function() {
	$('#Container1').mixItUp({
		animation: {
			duration: 700,
			effects: 'stagger(34ms) rotateZ(20deg) fade scale(0.41)',
			easing: 'ease'
		}
	});
});

$(function() {
	var show = true;
	$(window).on("scroll", function() {
		if (!show) return false;
		var windowTop = $(window).scrollTop();
		var elementTop = $("#counter").offset().top;

		if (windowTop + 400 >= elementTop) {
			$(".counter-numbers").spincrement({
				thousandSeparator: "",
				duration: 2500
			});
			show = false;
		}
	});
});

let openBtn = document.querySelector('.btn-menu');
let removeBtnMenu = document.querySelectorAll('.remove');
let wrapper = document.querySelector('.wrapper');
openBtn.addEventListener('click', btnMenu);

function btnMenu() {
	wrapper.classList.toggle('open-btn');
};

function removeBtn() {
	wrapper.classList.remove('open-btn');
}


for (let i = 0; i < removeBtnMenu.length; i++) {
	removeBtnMenu[i].addEventListener("click", removeBtn);
};

$(document).ready(function() {
	$("a.ancLinks").click(function() {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
});

function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

//--active link sticky header--//

var activeLink = "#nav";

function onScroll() {
	var scroll_top = $(document).scrollTop();
	$(activeLink + " a").each(function() {
		var hash = $(this).attr("href");
		var target = $(hash);
		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(activeLink + " a.active").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
}

$(function() {
	$(document).on("scroll", onScroll);
});

$(window).scroll(function() {
	var scrolled = $(this).scrollTop();
	if (scrolled >= 60) {
		$('.scroll-header').addClass('fix-header');
	}
	if (scrolled <= 60) {
		$('.scroll-header').removeClass('fix-header');
	}
});