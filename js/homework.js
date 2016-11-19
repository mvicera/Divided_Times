$(document).ready(function(){
  $("#primary-nav li").on("click",function(event) {
    event.preventDefault();

    var thisHref = $(this).find("a").attr("href");

    if ($(this).hasClass("active")) {
      $("#primary-nav li").removeClass("active");
      $("#slide-down").slideUp();
    } else {
      $(thisHref).show();
      $(thisHref).siblings().hide();

    $("#primary-nav li").removeClass("active");
    $("#slide-down").slideDown();
    $(this).addClass("active");
    }
  });
});
