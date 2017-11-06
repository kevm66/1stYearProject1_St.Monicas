$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    $target = $(target);

	    $('html, body').stop().animate({
     'scrollTop': $target.offset().top
}, 900, 'swing');	 
	       
	});
});		 
$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Check to see if the window is top if not then navbar will scroll with page
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').css();
		} else {
			$('.scrollToTop').css();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});
