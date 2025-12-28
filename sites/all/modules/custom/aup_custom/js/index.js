(function ($) {
  Drupal.behaviors.redirectOnAdmissionsSelectionByText = {
    attach: function (context, settings) {
      $('#edit-cid--2', context).change(function () {
        var selectedOptionText = $(this).find('option:selected').text();
        if (selectedOptionText === 'Admissions') {
          window.location.href = '/admissions/request-information';
        }
      });
    }
  };
})(jQuery);