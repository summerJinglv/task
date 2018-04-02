  	$(window).scroll(function(){
		if ($(window).scrollTop() > 0 ){
			$("#tools_goTop").fadeIn(300);
		} else {
			$("#tools_goTop").fadeOut(300);
		};
	});

	$("#tools_goTop a").click(function(){
		$(window).scrollTop(0);
	});

	$(".user-mode").on("mouseover", function() {
        $(".update-user").css("bottom", "0")
    }).on("mouseout", function() {
        $(".update-user").css("bottom", "-30px")
    })
    mainCenterAutoH();
    $(window).resize(function(){
    	mainCenterAutoH();
    })
    function mainCenterAutoH(){
    	var minH=$(window).height()-30-90-40-$(".footer").outerHeight();
    	$(".userCenter-main").css("min-height",minH);
    }