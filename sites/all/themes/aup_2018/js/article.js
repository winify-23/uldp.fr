


jQuery(document).ready( function(){

	if( jQuery(document).width() > 1220 || is_touch_device == false){

	halfScreen =  jQuery(window).height() * 0.4;

	var newpagerTop;

	var fadeStart= jQuery("#page_wrapper.page_wrapper_no_full_width #header_page_content").height() - halfScreen
    ,fadeUntil=fadeStart + 200 
    ,fading = jQuery('#page_content_full_height .page_content_full_height_bg .img-caption')


	jQuery("#page_content_full_height .page_content_full_height_bg .scrollable").scroll(function(){

		 scrollTop = jQuery("#page_content_full_height .page_content_full_height_bg .scrollable").scrollTop(); 
		 pagerTop = jQuery('.block-flippy').position().top  + 35; 

		 if(pagerTop < halfScreen ){
		 	jQuery('.block-flippy .block-flippy-container').addClass('fixed');
		 }

		 else{
		 	jQuery('.block-flippy .block-flippy-container').removeClass('fixed');
		 }
		

		 var offset = scrollTop
	        ,opacity=0
	    ;
	    if( offset<=fadeStart ){
	        opacity=0;
	    }else{
	        opacity=0+offset/fadeUntil;
	    }
	    fading.css('opacity',opacity);
		}); 

	}

}); 