$(document).ready(function () {
  $("#open").on("click", function() {
    $(this).fadeOut("fast");
    $('nav').fadeIn("fast");
  });
  $("#close").on("click", function() {
    $('nav').fadeOut("fast");
    $("#open").fadeIn("fast");
  });
});