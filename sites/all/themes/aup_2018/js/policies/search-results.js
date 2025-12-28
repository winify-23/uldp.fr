jQuery(document).ready(function ($) {
  if (!$("body").hasClass("page-university-policies-guidelines-search-results"))
    return false;

  $.get("/api/policies", function (data) {
    if (typeof data == "string") {
      results = JSON.parse(data);
    } else {
      results = data;
    }
    refresh();
  });

  $("#policies_search_form").keyup(function () {
    // refresh();
  });

  $(".search_form_policies input").click(function (e) {
    e.preventDefault();
    refresh();
  });

  function refresh() {
    $("#results").empty();
    var str = "";
    var searchStr = $("#policies_search_form").val();

    frStr = "";
    nbRes = 0;

    for (var i in results) {
      var policy = results[i];

      if (!filter(policy, searchStr)) continue;

      nbRes++;

      var tmpTitle = policy.title.toLowerCase();
      var strStart = tmpTitle.indexOf(searchStr.toLowerCase());

      var search_regexp = new RegExp(searchStr, "g");
      var output = tmpTitle.replace(search_regexp, "<b>" + searchStr + "</b>");

      frStr =
        policy.field_language_code.und[0].value === "0"
          ? '<span class="language_display lang_FR">(<span>FR</span>)</span>'
          : "";
      str +=
        "<li><a href='/" +
        policy.url +
        "'><h4><strong>" +
        policy.field_policy_code.und[0].value +
        "</strong> - " +
        output +
        "</h4> " +
        frStr +
        "</a></li>";
    }

    $("#results_number").text(nbRes);
    $("#results").append(str);
  }

  function filter(policy, searchStr) {
    return (
      policy.field_policy_code.und[0].value
        .toLowerCase()
        .indexOf(searchStr.toLowerCase()) !== -1 ||
      policy.title.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1 ||
      policy.body.und[0].value
        .toLowerCase()
        .indexOf(searchStr.toLowerCase()) !== -1 ||
      searchStr == ""
    );
  }
});
