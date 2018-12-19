 $(function(){
     $('.chuot,.kn').click(function(event) {
     	$('html,body').animate({ scrollTop: $(".edu").offset().top}, 500)
     });
     $('.sp').click(function(event) {
     	$('html,body').animate({ scrollTop: $(".cacsp").offset().top}, 500)
     });
     $('.nutlen').click(function(event) {
     	$('html,body').animate({ scrollTop:0}, 500)
     });
     $('.cmt').click(function(event) {
     	$('html,body').animate({ scrollTop:$(".facebookcomment").offset().top}, 500)
     });
})  
 