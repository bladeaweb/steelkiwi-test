$(".tab__content").hide();
$(".tab__content:first").show();
$("ul.tabs li").click(function() {
  $(".tab__content").hide();
  var activeTab = $(this).attr("rel");
  $("#"+activeTab).fadeIn();
  $("ul.tabs li").removeClass("active");
  $(this).addClass("active");
  $(".tab__drawer-heading").removeClass("d__active");
  $(".tab__drawer-heading[rel^='"+activeTab+"']").addClass("d__active");
});
$(".tab__drawer-heading").click(function() {
  $(".tab__content").hide();
  var d_activeTab = $(this).attr("rel");
  $("#"+d_activeTab).fadeIn();
  $(".tab__drawer-heading").removeClass("d__active");
  $(this).addClass("d__active");
  $("ul.tabs li").removeClass("active");
  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
});