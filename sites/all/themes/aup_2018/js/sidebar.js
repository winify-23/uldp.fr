jQuery(document).ready( function(){



  jQuery('#sidebar_main:not(.sidebar_home) .trigger_main_menu').on('click', function(){
    jQuery(this).toggleClass('trigger_close'); 
    jQuery('#sidebar_hover').toggleClass('show'); 
    jQuery('#sidebar_main').toggleClass('sidebar_main_show_hover');

    if(jQuery(document).width() < 500 ){

      jQuery('body').toggleClass('no_scroll_mobile'); 

    }

  }); 




	/* ADD EXPEND ICON IN MAIN MENU ITEMS */
	jQuery('#sidebar_main #sidebar_main_menu > .menu > li.expanded, .relative_content_menu .menu-block-wrapper  > .menu > li.expanded').each(

		function(){
			jQuery(this).append('<i class="expend-sub-menu"></i>')
		}
	); 

	/* EXPEND TRIGGER ANIMATION IN MAIN MENU ITEMS */
	jQuery('#sidebar_main #sidebar_main_menu > .menu > li.expanded, .relative_content_menu .menu-block-wrapper  > .menu > li.expanded').on('click', '.expend-sub-menu', function(e){

    if(jQuery(this).is('.active')){
       jQuery(this).removeClass('active');
        jQuery(e.delegateTarget).find('.menu').first().removeClass('active');
    }
    else{
      jQuery('.expend-sub-menu').removeClass('active');
      jQuery('.menu').removeClass('active'); 
      jQuery(this).addClass('active');
      jQuery(e.delegateTarget).find('.menu').first().addClass('active'); 
    }
		



	});



	     var myElement2 = document.querySelector("#sidebar_header_responsive");
      // construct an instance of Headroom, passing the element
      var headroom2  = new Headroom(myElement2);
      // initialise
      headroom2.init(); 
      

      /* responsive menu action */

      jQuery('#responsive_trigger_menu_main, #home_hamburger').on('click', function(evt){
         
          var select = jQuery(this);     
          select.find('.hamburger-icon').toggleClass('is-active'); 
          jQuery('#page_wrapper').toggleClass('active_sidebar'); 
          jQuery('body').toggleClass('disable-scroll');
        
      });

      jQuery('#sidebar_overlay, #sidebar_main.sidebar_home .trigger_main_menu').on('click', function(){
          jQuery('#responsive_trigger_menu_main .hamburger-icon').removeClass('is-active'); 
          jQuery('#page_wrapper').removeClass('active_sidebar'); 
          jQuery('body').removeClass('disable-scroll');
      }); 

/*      jQuery("body").swipe({
        //Generic swipe handler for all directions
      allowPageScroll: 'vertical', 
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {

          console.log(event); 
            
            if(direction == 'left'){
              jQuery('#responsive_trigger_menu_main .hamburger-icon').removeClass('is-active'); 
              jQuery('#page_wrapper').removeClass('active_sidebar'); 
              jQuery('body').removeClass('disable-scroll');
            }

            if(direction == 'right'){
              jQuery('#responsive_trigger_menu_main .hamburger-icon').addClass('is-active'); 
              jQuery('#page_wrapper').addClass('active_sidebar'); 
              jQuery('body').addClass('disable-scroll');
            }

        },
         threshold:150
       }); 

*/




}); 

