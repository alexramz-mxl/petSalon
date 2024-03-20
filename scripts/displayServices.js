//this line is similar to window.onload
$(document).ready(function(){
    console.log("services action");

    //all code here
    $("#groomingDiv").hide();
    $("#vaccinesDiv").hide();
    $("#hotelsDiv").hide();

    $("#groomingBtn").click(function(){
        $("li").removeClass("dark");
        $(this).addClass("dark");
        $("#vaccinesDiv").hide();
        $("#hotelDiv").hide();
        $("#groomingDiv").show();
    });
    $("#vaccinesBtn").click(function(){
        $("li").removeClass("dark");
        $(this).addClass("dark");
        $("#groomingDiv").hide();
        $("#hotelDiv").hide();
        $("#vaccinesDiv").show();
    });
    $("#hotelsBtn").click(function(){
        $("li").removeClass("dark");
        $(this).addClass("dark");
        $("#groomingDiv").hide();
        $("#vaccinesDiv").hide();
        $("#hotelDiv").show();
    });
});
