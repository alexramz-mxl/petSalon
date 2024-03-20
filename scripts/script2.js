// JS vs JQuery


$("h1").click(function(){
    $(".header-img ").hide();
});

$(".main-text").click(function(){
    $(".header-img ").show();
});

$("#mode").click(function(){
    $("header").addClass("dark");
});
