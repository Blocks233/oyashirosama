$.fn.wait = function(option, options) {
        milli = 1000;
        if (option && (typeof option == 'function' || isNaN(option)) ) {
            options = option;
        } else if (option) {
            milli = option;
        }

        // set defaults
        var defaults = {
            msec: milli,
            onEnd: options
        },
        settings = $.extend({},defaults, options);

        if(typeof settings.onEnd == 'function') {
            this.each(function() {
                setTimeout(settings.onEnd, settings.msec);
            });
            return this;
        } else {
            return this.queue('fx',
            function() {
                var self = this;
                setTimeout(function() { $.dequeue(self); },settings.msec);
            });
        }
    };

$(function(){
  var intervalSec = 8;

  var twObj = $('#twitter_update_list li');
  twObj.find('a').attr('target','_blank');
  var boxHeight = $('#twitter_div').height();
  twObj.css({
    position: 'absolute',
    top: boxHeight + 'px',
    left: '0px'
  })
    .eq(0)
    .wait(500)
    .animate({top: '0px'},1000)
    .find('a')
    .attr('target','_blank');
  
  /*twObj.each(function(i){
    var fontSizeBase = 100;
    while ($(this).height() < boxHeight){
      fontSizeBase = fontSizeBase + 5;
      $(this).css('font-size',fontSizeBase + '%');
    }
    while ($(this).height() > boxHeight){
      fontSizeBase = fontSizeBase - 5;
      $(this).css('font-size',fontSizeBase + '%');
    }
  });*/

  setInterval(slideTwitter,intervalSec * 1000);

  var twIndex = 0;
  function slideTwitter(){
    var twNextIndex = twIndex + 1;
    if (!$('#twitter_update_list li').get(twNextIndex)){
      twNextIndex = 0;
    }
    twObj.eq(twIndex).animate({top: '-' + boxHeight + 'px'},500,function(){
       twObj.eq(twIndex).css({top: boxHeight + 'px'});
       twObj.eq(twNextIndex).animate({top: '0px'},500);
       twIndex = twNextIndex;
    });
  }
});