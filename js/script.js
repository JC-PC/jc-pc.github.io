var pos = 1;
$(document).ready(function(){
	$("#header-contact").click(function(){
		$("html, body").animate({ scrollTop: ($("#contact-bar").offset().top) });
	});
	$("#header-me").click(function(){
		$("html, body").animate({ scrollTop: ($("#about-bar").offset().top) });
	});
	$("#header-info").click(function(){
		$("html, body").animate({ scrollTop: ($("#info-bar").offset().top) });
	});
	$("#contact-reasons").click(function(){
		$("html, body").animate({ scrollTop: ($("#contact-bar").offset().top) });
	});

$(".pi").click(function(e){
	e.preventDefault();

	switch(this.id){
		case 'skype':
				$("#tri").animate({marginLeft: '34%'}, 1000);
				$("#skype1").animate({opacity: '1'}, 1000);
				$("#skype2").animate({opacity: '1'}, 1000);
				$("#mail1").animate({opacity: '0'}, 500);
				$("#mail2").animate({opacity: '0'}, 500);
				$("#text1").animate({opacity: '0'}, 500);
				$("#text2").animate({opacity: '0'}, 500);
				pos = 2;
		break;

		case 'text':
				$("#tri").animate({marginLeft: '67%'}, 1000);
				$("#skype1").animate({opacity: '0'}, 500);
				$("#skype2").animate({opacity: '0'}, 500);
				$("#mail1").animate({opacity: '0'}, 500);
				$("#mail2").animate({opacity: '0'}, 500);
				$("#text1").animate({opacity: '1'}, 1000);
				$("#text2").animate({opacity: '1'}, 1000);
				pos = 3;
		break;
		case 'mail':
				$("#tri").animate({marginLeft: '0%'}, 1000);
				$("#skype1").animate({opacity: '0'}, 500);
				$("#skype2").animate({opacity: '0'}, 500);
				$("#mail1").animate({opacity: '1'}, 1000);
				$("#mail2").animate({opacity: '1'}, 1000);
				$("#text1").animate({opacity: '0'}, 500);
				$("#text2").animate({opacity: '0'}, 500);
				pos = 1;
		break;
	}



		
	});
});
