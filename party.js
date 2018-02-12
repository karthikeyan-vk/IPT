$(document).ready(function() {
    $(".menuLinks").unbind('click').bind('click', function(event)
    {
        var contId = $(this).attr("ref");
        $(".welcomeCont").addClass("hide");
        $(".mainTabs").addClass("hide");
        $("#"+ contId).removeClass("hide");
    });
})
