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
	$(".chatOptionCont button").unbind('click').bind('click', function(event)
    {
		if($(this).hasClass("customBgColorBlk")) {
			$(".chatOptionCont button").toggleClass("customBgColorBlk active text-light");
		}
	});
	$(".chatCont").unbind('click').bind('click', function(event)
    {
		renderChatInfo(this);
	});
    var renderClubs = function() {
        var htmlStr = "";
        $("#header .tabTitle h2").text("Passes");
		$(".filterWrap").removeClass("hide");
		$(".chatOptionCont").addClass("hide");
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
		$(".chatOptionCont").removeClass("hide");
		for (var i=1; i<10; i++) {
            htmlStr += '<div class="row chatCont text-light">';
			htmlStr += '<div class="chatImgCont">';
            htmlStr += '<img class="img-fluid rounded-circle center-block chatImg" src="displayImage.png" alt="display picture" width="60px" height="60px">';
			htmlStr += '<span class="badge newMsgBadge customBgColorRd">7</span>';
			htmlStr += '</div>';
			htmlStr += '<div class="chatNameCont">';
			htmlStr += '<div class="chatName">Dinesh</div>';
			htmlStr += '<div class="chatMsg">Hello World...</div>';
			htmlStr += '</div>';
			htmlStr += '<div class="buzzIcon" data-toggle="modal" data-target="#buzzModal"></div>';
            htmlStr += '</div>';
        }
        $("#chat .chatWrap").empty().append(htmlStr);
		$(".buzzIcon").unbind('click').bind('click', function(event)
		{
			renderBuzzModal(this);
		});
	};
	var renderCab = function() {
		var htmlStr = "";
        $("#header .tabTitle h2").text("Cab");
		$(".filterWrap").addClass("hide");
		$(".chatOptionCont").addClass("hide");
	};
	var renderBuzzModal = function(element) {
		var htmlStr = "";
		var ele = $(element).parent();
		var name = $(ele).find(".chatName").html();
		$("#buzzModal").remove();
		htmlStr += '<div class="modal fade" id="buzzModal">';
		htmlStr += '<div class="modal-dialog">';
		htmlStr += '<div class="modal-content text-light customBgColorRd">';
		htmlStr += '<div class="modal-header">';
		htmlStr += '<h4 class="modal-title">Reaching ' + name + '...</h4>';
		htmlStr += '</div>';
		htmlStr += '<div class="modal-body">';
		htmlStr += '<div class="buzzer"></div>';
		htmlStr += '</div>';
		htmlStr += '<div class="modal-footer">';
		htmlStr += '<button type="button" class="buzzModalClose btn btn-outline-light" data-dismiss="modal">Stop</button>';
		htmlStr += '</div>';
		htmlStr += '</div>';
		htmlStr += '</div>';
		htmlStr += '</div>';
		$(ele).append(htmlStr);
	};
	var renderChatInfo = function(ele) {
		
	};
})
