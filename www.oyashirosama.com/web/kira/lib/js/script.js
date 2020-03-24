
$(function(){  
     $(".tooltip a").hover(function() {  
        $(this).next("span").animate({opacity: "show", top: "-75"}, "slow");}, function() {  
               $(this).next("span").animate({opacity: "hide", top: "-85"}, "fast");  
     });  
}); 
$(function(){  
     $('a img').hover(function(){  
        $(this).attr('src', $(this).attr('src').replace('_off', '_on'));  
          }, function(){  
             if (!$(this).hasClass('currentPage')) {  
             $(this).attr('src', $(this).attr('src').replace('_on', '_off'));  
        }  
   });  
}); 

$(function(){
	$("http://www.oyashirosama.com/web/kira/lib/js/a.tab").click(function(){
    $(".activo").removeClass("activo");
    $(this).addClass("activo");
    $(".contenido").hide('slow');
    var muestra = $(this).attr("title");
    $("#"+muestra).show('slow'); 
    });  
});