function scrollToView (element) {

	//$(window).scrollTop($('#'+element.value).position().top); 
	

	
	$('html, body').animate({
        scrollTop:$('#'+element.value).offset().top
    }, 3000);
}
