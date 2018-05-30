
/*------------- Baidu -------------------*/

(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();


/*-------------BacktoTop-----------------*/
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#scroll').fadeIn();
        }else{
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

/*-------------Highlight Nav-------------*/
$(document).ready(function() {
  var url = window.location.href;
  console.log(url);
  var v1 = "";
  $(".navbar .nav>li>a").each(function () {
    v1 = $(this).attr("href");
    console.log(v1);
    if (v1 == url) {
      var v2 = $(this).css("background-color", "#446980");
      var v3 = $(this).css("color", "white");
    }
  })
});