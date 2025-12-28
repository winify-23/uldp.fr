
jQuery(document).ajaxComplete(function () {
  /*
      $( ".chosen-container-multi" ).each(function( index ) {
         var placeholdervalue = $(this).find('.search-field > input').attr('data-title');
         if ($(this).find('.search-choice').length == 0) {
             $(this).find('.search-field > input').attr('placeholder', placeholdervalue);
          }
          else {
             $(this).find('.search-field > input').attr('placeholder', ''); 
          }
      });

      $(".chosen-container-multi").click(function(){
          var placeholdervalue = $(this).find('.search-field > input').attr('data-title');
         if ($(this).find('.search-choice').length > 0) {
             $(this).find('.search-field > input').attr('placeholder', ''); 
          }
          else {
             $(this).find('.search-field > input').attr('placeholder', placeholdervalue);
          }
      });  */


  if (jQuery("body").hasClass("node-type-page-global-talent-portal")) {

    jQuery('#views-exposed-form-global-talent-portal-search-block-list-global-portal').attr('action', '/global-talent-portal');

    jQuery('#edit-reset-link').remove();
    jQuery('#edit-reset').after('<a id="edit-reset-link" href="/global-talent-portal">Reset filters</a>');
    jQuery('#edit-reset').hide();

    jQuery("#edit-time-frame-value-month option:nth-child(1)").text('Starting Month');
    jQuery("#edit-time-frame-value-year option:nth-child(1)").text('Starting Year');

    jQuery(".form-item-industry > .chosen-container-multi > .chosen-choices > .search-field > input").remove();
    jQuery(".form-item-industry > .chosen-container-multi > .chosen-choices > .search-field").append('<input type="text" autocomplete="off" class="placeholder_chosen" style="width: 167px;" placeholder="Industry" data-title="Industry">');

    jQuery(".form-item-graduate-undergraduate > .chosen-container-multi > .chosen-choices > .search-field > input").remove();
    jQuery(".form-item-graduate-undergraduate > .chosen-container-multi > .chosen-choices > .search-field").append('<input type="text" autocomplete="off" class="placeholder_chosen" style="width: 167px;" placeholder="Graduate / Undergraduate" data-title="Graduate / Undergraduate">');


    jQuery(".form-item-graduate-programs > .chosen-container-multi > .chosen-choices > .search-field > input").remove();
    jQuery(".form-item-graduate-programs > .chosen-container-multi > .chosen-choices > .search-field").append('<input type="text" autocomplete="off" class="placeholder_chosen" style="width: 167px;" placeholder="Graduate Program(s)" data-title="Graduate Program(s)">');

    jQuery(".form-item-undergraduate-majors > .chosen-container-multi > .chosen-choices > .search-field > input").remove();
    jQuery(".form-item-undergraduate-majors > .chosen-container-multi > .chosen-choices > .search-field").append('<input type="text" autocomplete="off" class="placeholder_chosen" style="width: 167px;" placeholder="Undergraduate Major(s)" data-title="Undergraduate Major(s)">');

    jQuery(".form-item-languages > .chosen-container-multi > .chosen-choices > .search-field > input").remove();
    jQuery(".form-item-languages > .chosen-container-multi > .chosen-choices > .search-field").append('<input type="text" autocomplete="off" class="placeholder_chosen" style="width: 167px;" placeholder="Language(s)" data-title="Language(s)">');
  }


  if (jQuery("body").hasClass("page-node-add-profile") || jQuery("body").hasClass("node-type-profile")) {


    jQuery('.field-name-field-key-strength .field-add-more-submit').val('Add key strength');
    jQuery('.field-name-field-professional-or-volunteer- .field-add-more-submit').val('Add experience');
    jQuery('.field-name-field-social-media-profiles .field-add-more-submit').val('Add social media profile');

    jQuery('.field-name-field-ug-degree .field-add-more-submit').val('Add Undergraduate degree');
    jQuery('.field-name-field-ug-institutions .field-add-more-submit').val('Add Undergraduate institution');

    jQuery(".field-name-field-professional-or-volunteer- .description").hide();
    jQuery('.form-item-field-professional-or-volunteer--und-0-value > label').remove();

    jQuery(".field-name-field-professional-or-volunteer- table.field-multiple-table > tbody > tr > td > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      //jQuery( this ).attr('placeholder','Job Title, Company Name, Start and End Date');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-professional-or-volunteer-und-' + index + '-value"> <span class="form-required" title="This field is required.">*</span></label>');
      }
    });

    jQuery(".field-name-field-professional-or-volunteer- table.field-multiple-table > tbody > tr > td > .ajax-new-content > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      //jQuery( this ).attr('placeholder','Job Title, Company Name, Start and End Date');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-professional-or-volunteer-und-' + index + '-value"> <span class="form-required" title="This field is required.">*</span></label>');
      }
    });


    jQuery(".field-name-field-activity-or-interest table.field-multiple-table > tbody > tr > td > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-activity-or-interest-und-' + index + '-value"> Activity or interest</label>');
      }
    });
  }

  if (jQuery("body").hasClass("page-node-add-profile") || jQuery("body").hasClass("node-type-profile")) {


    jQuery('.field-name-field-key-strength .field-add-more-submit').val('Add key strength');
    jQuery('.field-name-field-professional-or-volunteer- .field-add-more-submit').val('Add experience');
    jQuery('.field-name-field-social-media-profiles .field-add-more-submit').val('Add social media profile');

    jQuery('.field-name-field-ug-degree .field-add-more-submit').val('Add another degree');
    jQuery('.field-name-field-ug-institutions .field-add-more-submit').val('Add Undergraduate institution');

    jQuery(".field-name-field-professional-or-volunteer- .description").hide();
    jQuery('.form-item-field-professional-or-volunteer--und-0-value > label').remove();

    jQuery(".field-name-field-professional-or-volunteer- table.field-multiple-table > tbody > tr > td > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      //jQuery( this ).attr('placeholder','Job Title, Company Name, Start and End Date');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-professional-or-volunteer-und-' + index + '-value"> <span class="form-required" title="This field is required.">*</span></label>');
      }
    });


    jQuery(".field-name-field-activity-or-interest table.field-multiple-table > tbody > tr > td > .ajax-new-content > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-activity-or-interest-und-' + index + '-value"> Activity or interest</label>');
      }
    });


    jQuery(".field-name-field-ug-degree table.field-multiple-table > tbody > tr > td > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-ug-degree-und-' + index + '-value"> Previously awarded degree and Institution</label>');
      }
    });

    jQuery(".field-name-field-ug-degree table.field-multiple-table > tbody > tr > td > .ajax-new-content > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-ug-degree-und-' + index + '-value"> Previously awarded degree and Institution</label>');
      }
    });


    jQuery(".field-name-field-ug-institutions table.field-multiple-table > tbody > tr > td > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-ug-institutions-und-' + index + '-value"> Undergraduate institution</label>');
      }
    });

    jQuery(".field-name-field-ug-institutions table.field-multiple-table > tbody > tr > td > .ajax-new-content > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-ug-institutions-und-' + index + '-value"> Undergraduate institution</label>');
      }
    });


    jQuery(".field-name-field-ug-degree table.field-multiple-table > tbody > tr > td > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-ug-degree-und-' + index + '-value"> Undergraduate degree</label>');
      }
    });

    jQuery(".field-name-field-ug-degree table.field-multiple-table > tbody > tr > td > .ajax-new-content > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-ug-degree-und-' + index + '-value"> Undergraduate degree</label>');
      }
    });


    jQuery(".field-name-field-ug-institutions table.field-multiple-table > tbody > tr > td > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-ug-institutions-und-' + index + '-value"> Undergraduate institution</label>');
      }
    });

    jQuery(".field-name-field-ug-institutions table.field-multiple-table > tbody > tr > td > .ajax-new-content > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-ug-institutions-und-' + index + '-value"> Undergraduate institution</label>');
      }
    });


    jQuery('.form-item-field-key-strength-und-0-value > label').remove();
    jQuery('.form-item-field-key-strength-und-0-value > input').before('<label for="edit-field-key-strength-und-0-value">Key strength <span class="form-required" title="This field is required.">*</span></label>');

    jQuery(".field-name-field-key-strength table.field-multiple-table > tbody > tr > td .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        if (index <= 1) {
          jQuery(this).before('<label for="edit-field-key-strength-und-und-' + index + '-value">Key strength <span class="form-required" title="This field is required.">*</span></label>');
        }
        else {
          jQuery(this).before('<label for="edit-field-key-strength-und-und-' + index + '-value">Key strength</label>');
        }
      }
    });



    jQuery("#edit_field_aup_undergraduate_majors_und_chosen> .chosen-choices > .search-field > input").remove();
    jQuery("#edit_field_aup_undergraduate_majors_und_chosen > .chosen-choices > .search-field").append('<input type="text" autocomplete="off" class="placeholder_chosen" style="width: 380px;" placeholder="Select option from pull-down menu" data-title="Select option from pull-down menu">');

    jQuery("#edit_field_aup_undergraduate_minors_und_chosen> .chosen-choices > .search-field > input").remove();
    jQuery("#edit_field_aup_undergraduate_minors_und_chosen > .chosen-choices > .search-field").append('<input type="text" autocomplete="off" class="placeholder_chosen" style="width: 380px;" placeholder="Select option from pull-down menu" data-title="Select option from pull-down menu">');
  }



  loadBgImages();


  jQuery('.fit-text-2').bigText({

    maximumFontSize: 24,
    minimumFontSize: 15

  });

  jQuery('.fit-text-3').bigText({

    maximumFontSize: 22,
    minimumFontSize: 15

  });




});




jQuery(document).ready(function () {


  // jQuery('#sortBy a').click(function() {
  //   if(jQuery('.views-widget-filter-field_interests_tid').hasClass('active') || jQuery('.views-widget-filter-field_careers_tid').hasClass('active'))
  //     jQuery('.clear-checkboxes').trigger('click');
  // });


  /*$(".chosen-container-multi").click(function(){
       var placeholdervalue = $(this).find('.search-field > input').attr('data-title');
      if ($(this).find('.search-choice').length > 0) {
          $(this).find('.search-field > input').attr('placeholder', ''); 
       }
       else {
          $(this).find('.search-field > input').attr('placeholder', placeholdervalue);
       }
   });  */


  if (jQuery("body").hasClass("page-node-add-profile")) {
    jQuery("table#field-key-strength-values tr:nth-child(3)").hide();
  }

  if (jQuery("body").hasClass("page-node-add-profile") || jQuery("body").hasClass("node-type-profile")) {

    jQuery('.field-name-field-key-strength .field-add-more-submit').val('Add key strength');
    jQuery('.field-name-field-professional-or-volunteer- .field-add-more-submit').val('Add experience');
    jQuery('.field-name-field-social-media-profiles .field-add-more-submit').val('Add social media profile');

    jQuery('.field-name-field-ug-degree .field-add-more-submit').val('Add Undergraduate degree');
    jQuery('.field-name-field-ug-institutions .field-add-more-submit').val('Add Undergraduate institution');

    jQuery('.form-item-field-professional-or-volunteer--und-0-value > label').remove();
    jQuery("table#field-professional-or-volunteer-values > tbody > tr > td > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      //jQuery( this ).attr('placeholder','Job Title, Company Name, Start and End Date');
      //jQuery( this ).before('<label for="edit-field-professional-or-volunteer-und-0-value"><span class="form-required" title="This field is required.">*</span></label>');
    });
    jQuery(".field-name-field-professional-or-volunteer- .description").hide();


    jQuery(".field-name-field-professional-or-volunteer- table.field-multiple-table > tbody > tr > td > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      //jQuery( this ).attr('placeholder','Job Title, Company Name, Start and End Date');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-professional-or-volunteer-und-' + index + '-value"> <span class="form-required" title="This field is required.">*</span></label>');
      }
    });
  }

  if (jQuery("body").hasClass("page-node-add-profile")) {
    jQuery("table#field-key-strength-values tr:nth-child(3)").hide();
  }

  if (jQuery("body").hasClass("page-node-add-profile") || jQuery("body").hasClass("node-type-profile")) {

    jQuery('.field-name-field-key-strength .field-add-more-submit').val('Add key strength');
    jQuery('.field-name-field-professional-or-volunteer- .field-add-more-submit').val('Add experience');
    jQuery('.field-name-field-social-media-profiles .field-add-more-submit').val('Add social media profile');

    jQuery('.field-name-field-ug-degree .field-add-more-submit').val('Add another degree');
    jQuery('.field-name-field-ug-institutions .field-add-more-submit').val('Add Undergraduate institution');

    jQuery('.form-item-field-professional-or-volunteer--und-0-value > label').remove();
    jQuery("table#field-professional-or-volunteer-values > tbody > tr > td > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      //jQuery( this ).attr('placeholder','Job Title, Company Name, Start and End Date');
      //jQuery( this ).before('<label for="edit-field-professional-or-volunteer-und-0-value"><span class="form-required" title="This field is required.">*</span></label>');
    });
    jQuery(".field-name-field-professional-or-volunteer- .description").hide();


    jQuery(".field-name-field-professional-or-volunteer- table.field-multiple-table > tbody > tr > td > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      //jQuery( this ).attr('placeholder','Job Title, Company Name, Start and End Date');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-professional-or-volunteer-und-' + index + '-value"> <span class="form-required" title="This field is required.">*</span></label>');
      }
    });


    jQuery(".field-name-field-activity-or-interest table.field-multiple-table > tbody > tr > td > .ajax-new-content > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-activity-or-interest-und-' + index + '-value"> Activity or interest</label>');
      }
    });


    jQuery(".field-name-field-ug-degree table.field-multiple-table > tbody > tr > td > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-ug-degree-und-' + index + '-value"> Previously awarded degree and Institution</label>');
      }
    });

    jQuery(".field-name-field-ug-degree table.field-multiple-table > tbody > tr > td > .ajax-new-content > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-ug-degree-und-' + index + '-value"> Previously awarded degree and Institution</label>');
      }
    });


    jQuery(".field-name-field-ug-institutions table.field-multiple-table > tbody > tr > td > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-ug-institutions-und-' + index + '-value"> Undergraduate institution</label>');
      }
    });

    jQuery(".field-name-field-ug-institutions table.field-multiple-table > tbody > tr > td > .ajax-new-content > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-ug-institutions-und-' + index + '-value"> Undergraduate institution</label>');
      }
    });


    jQuery('.form-item-field-key-strength-und-0-value > label').remove();
    jQuery('.form-item-field-key-strength-und-0-value > input').before('<label for="edit-field-key-strength-und-0-value">Key strength <span class="form-required" title="This field is required.">*</span></label>');

    jQuery(".field-name-field-key-strength table.field-multiple-table > tbody > tr > td .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        if (index <= 1) {
          jQuery(this).before('<label for="edit-field-key-strength-und-und-' + index + '-value">Key strength <span class="form-required" title="This field is required.">*</span></label>');
        }
        else {
          jQuery(this).before('<label for="edit-field-key-strength-und-und-' + index + '-value">Key strength</label>');
        }
      }
    });

    jQuery(".field-name-field-technical-skill #autocomplete-deluxe-input").attr('placeholder', 'Click in the box to select a skill from the list or type your own');

    jQuery("#edit_field_aup_undergraduate_majors_und_chosen> .chosen-choices > .search-field > input").remove();
    jQuery("#edit_field_aup_undergraduate_majors_und_chosen > .chosen-choices > .search-field").append('<input type="text" autocomplete="off" class="placeholder_chosen" style="width: 380px;" placeholder="Select option from pull-down menu" data-title="Select option from pull-down menu">');


    jQuery(".field-name-field-ug-degree table.field-multiple-table > tbody > tr > td > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-ug-degree-und-' + index + '-value"> Undergraduate degree</label>');
      }
    });

    jQuery(".field-name-field-ug-degree table.field-multiple-table > tbody > tr > td > .ajax-new-content > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-ug-degree-und-' + index + '-value"> Undergraduate degree</label>');
      }
    });


    jQuery(".field-name-field-ug-institutions table.field-multiple-table > tbody > tr > td > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-ug-institutions-und-' + index + '-value"> Undergraduate institution</label>');
      }
    });

    jQuery(".field-name-field-ug-institutions table.field-multiple-table > tbody > tr > td > .ajax-new-content > .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        jQuery(this).before('<label for="edit-field-ug-institutions-und-' + index + '-value"> Undergraduate institution</label>');
      }
    });


    jQuery('.form-item-field-key-strength-und-0-value > label').remove();
    jQuery('.form-item-field-key-strength-und-0-value > input').before('<label for="edit-field-key-strength-und-0-value">Key strength <span class="form-required" title="This field is required.">*</span></label>');

    jQuery(".field-name-field-key-strength table.field-multiple-table > tbody > tr > td .form-type-textfield > input").each(function (index) {
      //jQuery( this ).append('<div class="description_each">Job Title, Company Name, Start and End Date</div>');
      if (jQuery(this).closest("div").find("label").length == 0) {
        if (index <= 1) {
          jQuery(this).before('<label for="edit-field-key-strength-und-und-' + index + '-value">Key strength <span class="form-required" title="This field is required.">*</span></label>');
        }
        else {
          jQuery(this).before('<label for="edit-field-key-strength-und-und-' + index + '-value">Key strength</label>');
        }
      }
    });

    jQuery(".field-name-field-technical-skill #autocomplete-deluxe-input").attr('placeholder', 'Click in the box to select a skill from the list or type your own');

    jQuery("#edit_field_aup_undergraduate_majors_und_chosen> .chosen-choices > .search-field > input").remove();
    jQuery("#edit_field_aup_undergraduate_majors_und_chosen > .chosen-choices > .search-field").append('<input type="text" autocomplete="off" class="placeholder_chosen" style="width: 380px;" placeholder="Select option from pull-down menu" data-title="Select option from pull-down menu">');

    jQuery("#edit_field_aup_undergraduate_minors_und_chosen> .chosen-choices > .search-field > input").remove();
    jQuery("#edit_field_aup_undergraduate_minors_und_chosen > .chosen-choices > .search-field").append('<input type="text" autocomplete="off" class="placeholder_chosen" style="width: 380px;" placeholder="Select option from pull-down menu" data-title="Select option from pull-down menu">');
  }

  if (jQuery("body").hasClass("node-type-page-global-talent-portal")) {
    jQuery("#edit-time-frame-value-month option:nth-child(1)").text('Starting Month');
    jQuery("#edit-time-frame-value-year option:nth-child(1)").text('Starting Year');

    jQuery(".form-item-industry > .chosen-container-multi > .chosen-choices > .search-field > input").remove();
    jQuery(".form-item-industry > .chosen-container-multi > .chosen-choices > .search-field").append('<input type="text" autocomplete="off" class="placeholder_chosen" style="width: 167px;" placeholder="Industry" data-title="Industry">');

    jQuery(".form-item-graduate-undergraduate > .chosen-container-multi > .chosen-choices > .search-field > input").remove();
    jQuery(".form-item-graduate-undergraduate > .chosen-container-multi > .chosen-choices > .search-field").append('<input type="text" autocomplete="off" class="placeholder_chosen" style="width: 167px;" placeholder="Graduate / Undergraduate" data-title="Graduate / Undergraduate">');


    jQuery(".form-item-graduate-programs > .chosen-container-multi > .chosen-choices > .search-field > input").remove();
    jQuery(".form-item-graduate-programs > .chosen-container-multi > .chosen-choices > .search-field").append('<input type="text" autocomplete="off" class="placeholder_chosen" style="width: 167px;" placeholder="Graduate Program(s)" data-title="Graduate Program(s)">');

    jQuery(".form-item-undergraduate-majors > .chosen-container-multi > .chosen-choices > .search-field > input").remove();
    jQuery(".form-item-undergraduate-majors > .chosen-container-multi > .chosen-choices > .search-field").append('<input type="text" autocomplete="off" class="placeholder_chosen" style="width: 167px;" placeholder="Undergraduate Major(s)" data-title="Undergraduate Major(s)">');

    jQuery(".form-item-languages > .chosen-container-multi > .chosen-choices > .search-field > input").remove();
    jQuery(".form-item-languages > .chosen-container-multi > .chosen-choices > .search-field").append('<input type="text" autocomplete="off" class="placeholder_chosen" style="width: 167px;" placeholder="Language(s)" data-title="Language(s)">');

    jQuery('#edit-reset').after('<a id="edit-reset-link" href="/global-talent-portal">Reset filters</a>');
    jQuery('#edit-reset').hide();
  }


  if (jQuery(".left_talent_profile").length > 0) {
    jQuery.get("/api/json-profile/" + jQuery('#nidhidden').val(), function (data) {

      if (data.length > 0) {
        jQuery('#edit-submitted-e-mail-student').val(data[0].m);
      }
    });
  }


  jQuery('.webform-component--e-mail-student').hide();

  jQuery('#edit-submitted-name-student').val(jQuery('#namehidden').val());
  jQuery('.webform-component--name-student').hide();

  jQuery('#edit-submitted-url-student').val(jQuery('#urlhidden').val());
  jQuery('.webform-component--url-student').hide();

  if (jQuery("body").hasClass("node-type-profile") && !jQuery("body").hasClass("page-node-edit")) {
    jQuery('.date-display-range').html(jQuery('.date-display-range').html().replace(" to ", " - "));
  }


  jQuery('#views-exposed-form-global-talent-portal-search-block-list-global-portal').attr('action', '/global-talent-portal');

  if (jQuery("body").hasClass("node-type-profile") && (jQuery('#statushidden').val() == 'published' || jQuery('#statusrealhidden').val() == 'readyreview')) {
    jQuery(".form_area :input").prop("readonly", true);

    jQuery(".form_area :input[type=text]:not(.multiple-fields-remove-button)").each(function () {
      var textInput = $(this).attr('value');
      var displayHTML = "<div class='tooltip'>" + textInput + "</div>";
      $(displayHTML).insertAfter(this);
      $(this).parent().addClass('has_tooltip');
    });

    jQuery(".form_area input[type='submit']").prop("disabled", true);

    jQuery(".form_area :input[type=text]:not(.multiple-fields-remove-button)").each(function () {
      var textInput = $(this).attr('value');
      var displayHTML = "<div class='tooltip'>" + textInput + "</div>";
      $(displayHTML).insertAfter(this);
      $(this).parent().addClass('has_tooltip');
    });

    jQuery(".form_area input[type='submit']").prop("disabled", true);

    jQuery(".chosen-processed option:not(:selected)").prop("disabled", true).trigger("chosen:updated");
    jQuery(".form_area select option:not(:selected)").prop("disabled", true);
    jQuery(".form_area select").addClass("readonly");

    jQuery('.chosen-container').addClass('readonly');
    jQuery('.form_area :radio').click(function () {
      return false;
    });

    jQuery('#edit-field-industry-field-of-study-und').click(function () {
      return false;
    });
    jQuery('#edit-field-i-hereby-acknowledge-und').click(function () {
      return false;
    });
    jQuery('#edit-field-i-accept-und').click(function () {
      return false;
    });

    jQuery('select').on('mousedown', function (e) {
      e.preventDefault();
      window.focus();
    });

    jQuery('.chosen-drop').hide();

    jQuery('.search-choice-close').hide();

    $('.field-name-field-technical-skill .autocomplete-deluxe-form').hide();
    $('.field-name-field-technical-skill .autocomplete-deluxe-item-delete').hide();
  }

  jQuery('#edit-field-industry-field-of-study-und > .form-type-checkbox > input').on('change', function () {
    var noChecked = 0;
    jQuery.each(jQuery('#edit-field-industry-field-of-study-und > .form-type-checkbox > input'), function () {
      if (jQuery(this).is(':checked')) {
        noChecked++;
      }
    });
    if (noChecked >= 3) {
      jQuery.each(jQuery('#edit-field-industry-field-of-study-und > .form-type-checkbox > input'), function () {
        if (jQuery(this).not(':checked').length == 1) {
          jQuery(this).attr('disabled', 'disabled');
        }
      });
    } else {
      jQuery('#edit-field-industry-field-of-study-und > .form-type-checkbox > input').removeAttr('disabled');
    };
  });



  loadBgImages();
  accordion();


  /* STICK FOOTER BOTTOM */

  jQuery('.node-type-page-func #page').css('min-height', jQuery(window).height() - jQuery('#top_bar').height());

  /* PAGE NAVE TOOL LONG SIDEBAR FIXE */

  if (jQuery('#page_banner_landing').hasClass('no_content') && jQuery(document).width() >= 866) {
    jQuery('.sidebar_content').css('height', 'auto');
    sidebar_height = jQuery('.sidebar_content').height() + 65;
    banner_height = jQuery('#page_banner_landing').height();



    if (banner_height < sidebar_height) {
      jQuery('#page_banner_landing').height(sidebar_height + 50);

    }

  }

  jQuery(window).resize(function () {

    if (jQuery('#page_banner_landing').hasClass('no_content') && jQuery(document).width() >= 866) {
      jQuery('.sidebar_content').css('height', 'auto');
      sidebar_height = jQuery('.sidebar_content').height() + 65;
      banner_height = jQuery('#page_banner_landing').height();



      if (banner_height < sidebar_height) {
        jQuery('#page_banner_landing').height(sidebar_height + 50);

      }

    }

  });


  /* MAKE TITLE FIT HIS CONTAINER */

  jQuery('.fit-text').bigText({

    maximumFontSize: 70,
    minimumFontSize: 30

  });

  jQuery('.fit-text-2').bigText({

    maximumFontSize: 24,
    minimumFontSize: 15

  });

  jQuery('.fit-text-3').bigText({

    maximumFontSize: 22,
    minimumFontSize: 15

  });

  /* HIDE WIDGET CONTENT WHEN CONTAINER HAS IMAGE BG*/


  if (is_touch_device()) {

    jQuery(document).on('click', '.explore_thumb:not(.hovered)', function (e) {
      e.preventDefault();
      jQuery('.explore_thumb').removeClass('hovered');
      jQuery(this).addClass('hovered');
    });



    jQuery('.eye').on('touchstart', function () {
      jQuery(this).next().addClass('invisible').end();
      jQuery(this).closest('.widget_centered').find('.img-caption').addClass('show').end();

    });

    jQuery('.eye').on('touchend', function () {
      jQuery(this).next().removeClass('invisible').end();
      jQuery(this).closest('.widget_centered').find('.img-caption').removeClass('show').end();

    });

    /*   jQuery('.eye').on('taphold', function(){
  
             jQuery(this).next().removeClass('invisible').end(); 
             jQuery(this).closest('.widget_centered').find('.img-caption').removeClass('show').end(); 
       });*/
  }
  else {

    jQuery('.eye').on('mouseover', function () {

      jQuery(this).next().addClass('invisible').end();
      jQuery(this).closest('.widget_centered').find('.img-caption').addClass('show').end();

    });

    jQuery('.eye').on('mouseleave', function () {

      jQuery(this).next().removeClass('invisible').end();
      jQuery(this).closest('.widget_centered').find('.img-caption').removeClass('show').end();
    });

  }




  /* swibox video assets */

  // jQuery(".swipebox-tiled").swipebox();

  jQuery(".swipebox-video").swipebox({ selector: '.swipebox-video' });

  jQuery(document).on('click touchend', function (e) {
    if(jQuery(e.target).is('#swipebox-close')) {
      e.preventDefault();
      e.stopPropagation();
    }
  });

  // jQuery(document.body)
  //   .on('click touchend', '#swipebox-slider .current img', function (e) {
  //     return false;
  //   })
  //   .on('click touchend', '#swipebox-slider .current', function (e) {
  //     e.stopPropagation();
  //     jQuery('#swipebox-close').trigger('click');
  //   });


  /* SLIDESHOW */


  jQuery("#slideshow").owlCarousel({
    animateOut: 'fadeOut',
    responsiveClass: true,
    items: 1,
    nav: false,
    dots: true,
    loop: true,
    slideSpeed: 500,
    autoplay: true,
    autoplayTimeout: 7000,
    dragEndSpeed: 880

  });



  jQuery("#slideshow2").owlCarousel({
    loop: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    margin: 10,
    responsiveClass: true,
    items: 1,
    nav: true,
    dots: false,
    loop: false,
    slideSpeed: 2200,
    autoplayTimeout: 8500,
    autoplay: true,
    onInitialized: moveNav,
    mouseDrag: false

  });

  function moveNav() {
    jQuery('.owl-nav').appendTo('.caption');
  }


  /* SCROLL TO ANCHORS */

  jQuery('.nav_anchor a, .anchor_link').on('click', function (event) {




    href = jQuery(this).attr('href');


    if (jQuery(this).attr('href') != '#' && jQuery(href).length > 0) {

      event.preventDefault();
      jQuery('body').animate({
        scrollTop: jQuery(href).offset().top - 40
      }, 700);

    }

    if (jQuery(window).width() < 500) {

      jQuery('#responsive_trigger_menu_main .hamburger-icon').removeClass('is-active');
      jQuery('#page_wrapper').removeClass('active_sidebar');
      jQuery('body').removeClass('disable-scroll');


    }

  });

  /* scroll to anchors in content */



  // /* this code below is really ugly, but wat only way I found after an afternoon of dubgging -- don't do this at home */
  jQuery("a[href*=\\#]:not([href=\\#])").on('click', function (e) {

    href = jQuery(this).attr('href');
    hrefID = href.replace('#', '');

    var html = "<a id='" + hrefID + "'></a>";

    var parent = jQuery(href).parent();





    var top = jQuery(href).offset().top;




    jQuery('html, body').stop().animate({
      scrollTop: top
    }, 700);


    parent.append(html);

  });




  jQuery('.list-assets-slider .view-content').each(
    function () {
      numItem = jQuery(this).find('a').length;


      if (numItem > 1) {

        jQuery(this).owlCarousel({
          loop: true,
          animateOut: 'fadeOut',
          margin: 10,
          responsiveClass: true,
          items: 1,
          nav: true,
          dots: true,
          autoplay: false,
          slideSpeed: 2200,
          autoplayTimeout: 8500,
          autoHeight: true

        });


      }

      else {
        jQuery(this).addClass('single');

      }

    }

  );


  jQuery('.list-article-slider .view-content').each(
    function () {
      numItem = jQuery(this).find('a').length;


      if (numItem > 1) {
        jQuery(this).owlCarousel({
          animateOut: 'fadeOut',
          margin: 10,
          responsiveClass: true,
          items: 1,
          nav: false,
          dots: true,
          loop: true,
          autoplay: jQuery(this).attr('data-rotation'),
          slideSpeed: 2200,
          autoplayTimeout: 7500

        });


      }

      else {
        jQuery(this).addClass('single');

      }

    }

  );



  jQuery(window).scroll(function () {

    scrollTop = jQuery(window).scrollTop();

    if (scrollTop > 62) {
      jQuery('#open_menu').addClass('active');
    }
    else {
      jQuery('#open_menu').removeClass('active');
    }

  });

  jQuery('#open_menu').on('click', function () {

    jQuery("#sidebar_hover").addClass('show');
    jQuery('#sidebar_main').addClass('sticky_fixed');
    jQuery('.trigger_main_menu').addClass('trigger_close');
    jQuery('#page_overlay').addClass('active');
    jQuery(this).hide();
  });


  jQuery(document).on('click', '.sticky_fixed .trigger_main_menu', function () {

    jQuery("#sidebar_main").removeClass('sticky_fixed');
    jQuery('#page_overlay').removeClass('active');
    jQuery('#open_menu').show();

  });


  /* NAVIGATION PAGE MENU SHOW DESCRIPTION ITEM */

  if (jQuery(window).width() > 865) {

    jQuery('#sidebar_main .nav_sub_menu .menu > li .item.has-description i').on('mouseenter', function () {

      jQuery(this).parent().addClass('active');
    });

    jQuery('#sidebar_main .nav_sub_menu .menu > li .item.has-description').on('mouseleave', function () {

      jQuery(this).removeClass('active');
    });
  }

  jQuery(window).resize(function () {

    jQuery('#sidebar_main .nav_sub_menu .menu > li .item.has-description i').on('mouseenter', function () {

      jQuery(this).parent().addClass('active');
    });

    jQuery('#sidebar_main .nav_sub_menu .menu > li .item.has-description').on('mouseleave', function () {

      jQuery(this).removeClass('active');
    });

  });




  jQuery('.responsive-tabs').responsiveTabs();
  jQuery('.rs-tabs').rsTabs();


  /* ANCHOR MENU ACTIVE ITEMS */

  if (jQuery(".nav_anchor").length > 0) {


    var topMenu = jQuery(".nav_anchor"),
      topMenuHeight = topMenu.outerHeight() + 15,
      // All list items
      menuItems = topMenu.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function () {
        var item = jQuery(jQuery(this).attr("href"));
        if (item.length) { return item; }
      });

    // Bind to scroll
    jQuery(window).scroll(function () {
      // Get container scroll position
      var fromTop = jQuery(this).scrollTop() + topMenuHeight;

      // Get id of current scroll item
      var cur = scrollItems.map(function () {
        if (this.offset().top < fromTop)
          return this;
      });
      // Get the id of the current element
      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");

    });
  }


  /* statistic widget */

  jQuery('.widget-statistic').each(

    function () {
      numColumn = jQuery(this).find('li').length;
      jQuery(this).attr('data-column', numColumn);
    }

  );


  jQuery('.widget-statistic .field-name-field-text .field-item').each(
    function () {

      jQuery(this).html(function (index, currentHtml) {
        return currentHtml.replace(/\n/g, '<br />');
      });
    }
  );

  jQuery('.widget-statistic .field-name-field-number .field-item').each(
    function () {

      jQuery(this).html(function (index, currentHtml) {
        return currentHtml.replace('of', '<small>of</small>');
      });
    }
  );

  /*  CHECK SIDEBAR IS EMPTY -> remove sidebar */

  var sidebarHeight = 0
  jQuery('#sidebar_main #sidebar_container .sidebar_content').children('div').each(function () {
    sidebarHeight = sidebarHeight + jQuery(this).height();
  });

  if (sidebarHeight == 0) {
    jQuery('#sidebar_main').attr('class', 'sidebar_home sidebar_small sidebar_push_left');
    //jQuery('#page_wrapper').addClass('page_wrapper_full_width_no_sidebar_sepcial')
  }

  /*if (jQuery('body.page-search404').length > 0 || jQuery('body.page-search').length > 0 || jQuery('body.node-type-page-func').length > 0 || jQuery('body.page-user .page_wrapper_no_full_width ').length > 0) {

    var sidebarContentMenuHeight = jQuery('#sidebar_main #sidebar_container .sidebar_content > *').height();
    var sidebarContentWidgetsHeight = jQuery('#sidebar_main #sidebar_container .sidebar_content #sidebar_left_widgets').height();
    if (sidebarContentWidgetsHeight == undefined) {
      sidebarContentWidgetsHeight = 0;
    }

    if (sidebarContentMenuHeight + sidebarContentWidgetsHeight == 0) {

      jQuery('#sidebar_main').attr('class', 'sidebar_home sidebar_small sidebar_push_left');
      //jQuery('#page_wrapper').addClass('page_wrapper_full_width_no_sidebar_sepcial')

    }

  }*/

});





/* RESPONSIVE TABS */

jQuery.fn.responsiveTabs = function () {

  return this.each(function () {
    var el = jQuery(this),
      tabs = el.find('dt'),
      content = el.find('dd'),
      placeholder = jQuery('<div class="responsive-tabs-placeholder"></div>').insertAfter(el);
    tabsNUm = el.find('dt').length;

    content.clone().appendTo(placeholder).wrapAll("<div class='inside'></div>");


    el.addClass('tab-num-' + tabsNUm);
    placeholder.addClass('tab-num-' + tabsNUm);


    tabs.on('click', function () {
      var pos = el.find('dt').index(this) + 1;
      var tab = jQuery(this);



      tabs.not(tab).removeClass('active');
      tab.addClass('active');

      /*   placeholder.html( tab.next().html());*/

      placeholder.attr('data-index', pos);

    });

    tabs.filter(':first').trigger('click');
  });

}

jQuery.fn.rsTabs = function () {

  return this.each(function () {
    var el = jQuery(this),
      tabs = el.find('dt'),
      content = el.find('dd'),
      placeholder = jQuery('<div class="rs-tabs-placeholder"></div>').insertAfter(el);
    tabsNUm = el.find('dt').length;


    el.addClass('tab-num-' + tabsNUm);
    placeholder.addClass('tab-num-' + tabsNUm);


    tabs.on('click', function () {
      var pos = el.find('dt').index(this) + 1;
      var tab = jQuery(this);



      tabs.not(tab).removeClass('active');
      tab.addClass('active');

      placeholder.html(tab.next().html());

      placeholder.attr('data-index', pos);

    });

    tabs.filter(':first').trigger('click');
  });

}


function loadBgImages() {
  jQuery('a[data-img], div[data-img], dt[data-img]').each(

    function () {

      var imgURL = jQuery(this).attr('data-img');

      jQuery(this).css({ 'background-image': 'url(' + imgURL + ')' }).addClass('show-img');

    }

  );
}


function getUrlParameter(sParam) {

  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}


function accordion() {

  /* ACCORDION */

  jQuery(document).on('click', '.accordion:not(.node-course) .accordion-head', function () {

    if (jQuery(this).hasClass('active')) {

      jQuery(this).removeClass('active');
      jQuery(this).next().removeClass('is-expanded');

    }

    else {

      jQuery('.accordion-content').removeClass('is-expanded');
      jQuery('.accordion-head').removeClass('active');

      jQuery(this).addClass('active');
      jQuery(this).next().addClass('is-expanded');
    }

  });

  jQuery(document).on('click', '.accordion.node-course .accordion-head', function () {

    if (jQuery(this).is('.active')) {

      jQuery(this).removeClass('active');
      jQuery(this).next().removeClass('is-expanded');

    }

    else {

      jQuery(this).addClass('active');
      jQuery(this).next().addClass('is-expanded');
    }

  });
}


function is_touch_device() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}


