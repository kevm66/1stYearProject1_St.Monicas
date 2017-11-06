<<<<<<< HEAD
$(document).ready(function(){
	$('a[href^="/Hire_Developer"]').on('click',function (e) {
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
			$('.hire').fadeIn();
		} else {
			$('.hire').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.hire').click(function(){
		$('a[href^="/Hire_Developer"]');
		return false;
	});
	
});
=======
$(document).ready(function(){
	$('a[href^="/Hire_Developer"]').on('click',function (e) {
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
			$('.hire').fadeIn();
		} else {
			$('.hire').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.hire').click(function(){
		$('a[href^="/Hire_Developer"]');
		return false;
	});
	
});
>>>>>>> 36aea27f375cc542ec7c317735412cfb5a19c946
