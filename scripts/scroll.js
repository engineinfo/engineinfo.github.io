 $(document).ready(function(){

 $(window).scroll(function() {
        var headerHeight = $("#header").height();
        var offset = $(window).scrollTop();
        //console.log(offset)
        if (offset > 416) {
            $("#logo").css({ "position": "fixed", "top": "40px" /*, "background" : "white"*/});
//            $(window).resize(function() { movePortBar() });

        }
      
        else {
            $("#logo").css({ "position": "absolute", "top": "460px", "background" : "transparent"});
        }
    });


});
 



