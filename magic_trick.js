$(document).ready(function(){
$("li.custom_nav" ).click(function() {
$('.site_content').find("*").removeClass("active");

$("#"+$(this).data("target")).addClass("active");
});
}); 