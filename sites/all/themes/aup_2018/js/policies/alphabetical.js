jQuery(document).ready(function ($) {
  if (!$("body").hasClass("page-university-policies-guidelines-alphabetical"))
    return false;

  $.get("/api/policies", function (data) {
    if( typeof data == "string"){
        results = valuesToArray(JSON.parse(data));
    }
    else{
        results = valuesToArray(data);
    }

    results = results.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;

      return 0;
    });

    refresh();
  });

  $(".letter").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(".active").removeClass("active");
      $(this).addClass("active");
    }

    refresh();
  });

  function refresh() {
    var letter = $(".active").attr("letter"),
      str = "";

    $("#results").empty();

    for (var i in results) {
      var policy = results[i],
        frStr =
          policy.field_language_code.und[0].value === "0"
            ? '<span class="language_display lang_FR">(<span>FR</span>)</span>'
            : "";

      if (
        policy.title.substring(0, 1) === letter ||
        typeof letter === "undefined"
      )
        str +=
          "<li><a href='/" +
          policy.url +
          "'><h4><strong>" +
          policy.field_policy_code.und[0].value +
          "</strong> - " +
          policy.title +
          "</h4> " +
          frStr +
          "</a></li>";
    }

    $("#results").append(str);
  }
});

function valuesToArray(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
}
