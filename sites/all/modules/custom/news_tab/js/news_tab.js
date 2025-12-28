(function ($) {
  $(document).ready(function () {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    if (urlParams.get('tab')) {
      $('.widget_news_content_top a:contains("' + urlParams.get('tab') +'")').trigger('click');
    }
  });
})(jQuery);