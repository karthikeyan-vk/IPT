$(document).ready(function() {
    $(".menuLinks").unbind('click').bind('click', function(event)
    {
        var contId = $(this).attr("ref");
		$(".menuLinks").removeClass("active");
		$(this).addClass("active");
        $(".welcomeCont").addClass("hide");
        $(".mainTabs").addClass("hide");
        $("#"+ contId).removeClass("hide");
        $("#header").removeClass("hide");
        $("body").css("padding-top", "60px");
		window.scrollTo(0, 0);
        if (contId == "clubs") {
            renderClubs();
        } else if (contId == "chat") {
            renderChat();
        } else if (contId == "cab") {
            renderCab();
        }
    });
	$(".gridListCont").unbind('click').bind('click', function(event)
    {
		if($(this).hasClass("grid")) {
			$(this).removeClass("grid").addClass("list");
			$(".passes").addClass("col-6").removeClass("col-12");
            $(".passes img").css("height", "150px");
		} else if($(this).hasClass("list")) {
			$(this).removeClass("list").addClass("grid");
			$(".passes").addClass("col-12").removeClass("col-6");
            $(".passes img").css("height", "200px");
		}
	});
    var renderClubs = function() {
        var htmlStr = "";
        $("#header .tabTitle h2").text("Passes");
		$(".filterWrap").removeClass("hide");
        for (var i=1; i<10; i++) {
            htmlStr += '<div class="col-12 col-md-6 passes">';
            htmlStr += '<img src="pass' + i + '.jpg" alt="passes">';
			htmlStr += '<div class="passDescCont text-center">';
			htmlStr += '<div class="passDesc">Venue: Test</div>';
			htmlStr += '<div class="passPrice">Rs 500</div>';
			htmlStr += '</div>';
            htmlStr += '<div class="col-12 overlay customBgColorBlk text-center hide">';
            htmlStr += '<button type="button" class="btn btn-dark">Explore</button>';
            htmlStr += '</div>';
            htmlStr += '</div>';
        }
        $("#clubs .clubWrap").empty().append(htmlStr);
		$(".passes").unbind('click').bind('click', function(event)
		{
			$(this).find(".overlay").toggleClass("hide");
		});
		$(".overlay button").unbind('click').bind('click', function(event)
		{
			alert("success");
		});
    };
	var renderChat = function() {
		var htmlStr = "";
        $("#header .tabTitle h2").text("Chat");
		$(".filterWrap").addClass("hide");
		for (var i=1; i<10; i++) {
            htmlStr += '<div class="row chatCont text-light">';
			htmlStr += '<div class="chatImgCont">';
            htmlStr += '<img class="img-fluid rounded-circle center-block chatImg" src="displayImage.png" alt="display picture" width="60px" height="60px">';
			htmlStr += '</div>';
			htmlStr += '<div class="chatNameCont">';
			htmlStr += '<div class="chatName">Dinesh</div>';
			htmlStr += '<div class="chatMsg">Hello World...</div>';
			htmlStr += '</div>';
            htmlStr += '</div>';
        }
        $("#chat .chatWrap").empty().append(htmlStr);
	};
	var renderCab = function() {
		var htmlStr = "";
        $("#header .tabTitle h2").text("Cab");
		$(".filterWrap").addClass("hide");
	};
})
