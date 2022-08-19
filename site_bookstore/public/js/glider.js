let banner_ubication = 0;

function show_banner(index) {
  let slides = document.querySelectorAll('.caja-img');
  let dots = document.querySelectorAll('.dot-nav');

  if (index >= slides.length){banner_ubication = 0};
  if (index < 0) { banner_ubication = slides.length - 1 };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    dots[i].classList.remove('active-dot');
  }

  slides[banner_ubication].style.display = 'block';
  dots[banner_ubication].classList.add('active-dot');
}

show_banner(banner_ubication);

document.querySelector('.btn-prev').addEventListener('click', () => {
  show_banner(--banner_ubication);
});


document.querySelector('.btn-next').addEventListener('click', () => {
  show_banner(++banner_ubication);
});


document.querySelectorAll('.dot-nav').forEach((element) => {
  element.addEventListener('click', function () {
    var dots = Array.prototype.slice.call(this.parentElement.children),
      dot_index = dots.indexOf(element);
    show_banner(banner_ubication = dot_index);
  })
});


setInterval(() => {
  show_banner(++banner_ubication)
}, 9000);


/*

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});
*/