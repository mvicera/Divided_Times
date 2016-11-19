$(document).ready(function(){

  $(".international").on("click",function(event) {
    event.preventDefault();

    if ($(this).hasClass("active")) {
      $("#primary-nav li").removeClass("active");
      $("#slide-down").slideUp();
    } else {

      $("#international-drop").show();
      $("#business-drop").hide();
      $("#politics-drop").hide();
      $("#technology-drop").hide();
      $("#culture-drop").hide();
      $("#blogs-drop").hide();

      $("#primary-nav li").removeClass("active");
      $("#slide-down").slideDown();
      $(this).addClass("active");
    }
  });
  $(".politics").on("click",function(event) {
    event.preventDefault();

    if ($(this).hasClass("active")) {
      $("#primary-nav li").removeClass("active");
      $("#slide-down").slideUp();
    } else {

      $("#international-drop").hide();
      $("#business-drop").hide();
      $("#politics-drop").show();
      $("#technology-drop").hide();
      $("#culture-drop").hide();
      $("#blogs-drop").hide();

      $("#primary-nav li").removeClass("active");
      $("#slide-down").slideDown();
      $(this).addClass("active");
    }
  });
  $(".business").on("click",function(event) {
    event.preventDefault();

    if ($(this).hasClass("active")) {
      $("#primary-nav li").removeClass("active");
      $("#slide-down").slideUp();
    } else {

      $("#international-drop").hide();
      $("#business-drop").show();
      $("#politics-drop").hide();
      $("#technology-drop").hide();
      $("#culture-drop").hide();
      $("#blogs-drop").hide();

      $("#primary-nav li").removeClass("active");
      $("#slide-down").slideDown();
      $(this).addClass("active");
    }
  });
  $(".technology").on("click",function(event) {
    event.preventDefault();

    if ($(this).hasClass("active")) {
      $("#primary-nav li").removeClass("active");
      $("#slide-down").slideUp();
    } else {

      $("#international-drop").hide();
      $("#business-drop").hide();
      $("#politics-drop").hide();
      $("#technology-drop").show();
      $("#culture-drop").hide();
      $("#blogs-drop").hide();

      $("#primary-nav li").removeClass("active");
      $("#slide-down").slideDown();
      $(this).addClass("active");
    }
  });
  $(".culture").on("click",function(event) {
    event.preventDefault();

    if ($(this).hasClass("active")) {
      $("#primary-nav li").removeClass("active");
      $("#slide-down").slideUp();
    } else {

      $("#international-drop").hide();
      $("#business-drop").hide();
      $("#politics-drop").hide();
      $("#technology-drop").hide();
      $("#culture-drop").show();
      $("#blogs-drop").hide();

      $("#primary-nav li").removeClass("active");
      $("#slide-down").slideDown();
      $(this).addClass("active");
    }
  });
  $(".blogs").on("click",function(event) {
    event.preventDefault();

    if ($(this).hasClass("active")) {
      $("#primary-nav li").removeClass("active");
      $("#slide-down").slideUp();
    } else {

      $("#international-drop").hide();
      $("#business-drop").hide();
      $("#politics-drop").hide();
      $("#technology-drop").hide();
      $("#culture-drop").hide();
      $("#blogs-drop").show();

      $("#primary-nav li").removeClass("active");
      $("#slide-down").slideDown();
      $(this).addClass("active");
    }
  });
});
