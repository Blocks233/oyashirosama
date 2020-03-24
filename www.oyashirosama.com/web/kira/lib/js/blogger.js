function twitterCallback2(twitters) {
  var statusHTML = [];
  for (var i=0; i<twitters.length; i++){
    var username = twitters[i].user.screen_name;
    var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
      return '<a href="'+url+'" target="_blank">'+url+'</a>';
    }).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
      return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
    });
    statusHTML.push('<li><a href="http://twitter.com/higu_anime" target="_blank"><img src="lib/images/t_mini-a.gif"/*tpa=http://www.oyashirosama.com/web/kira/lib/js/lib/images/t_mini-a.gif*/ alt="最新ツイート" width="16" height="16" border="0" style="margin:0 5px 0 10px;"></a> <span>'+status+'</span> <a style="/*font-size:10x;*/color:#ff0000;" href="http://twitter.com/'+username+'/statuses/'+twitters[i].id_str+'">'+relative_time(twitters[i].created_at)+'</a> by <a href="http://twitter.com/higu_anime" target="_blank" style="color:#ffff00;">アニメ「ひぐらし」公式ツイッター</a></li>');
  }
  document.getElementById('twitter_update_list').innerHTML = statusHTML.join('');
}

function relative_time(time_value) {
  var values = time_value.split(" ");
  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
  var parsed_date = Date.parse(time_value);
  var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
  var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
  delta = delta + (relative_to.getTimezoneOffset() * 60);

  if (delta < 60) {
    return '1分以内';
  } else if(delta < 120) {
    return '約1分前';
  } else if(delta < (60*60)) {
    return (parseInt(delta / 60)).toString() + ' 分前';
  } else if(delta < (120*60)) {
    return '約1時間前';
  } else if(delta < (24*60*60)) {
    return '約 ' + (parseInt(delta / 3600)).toString() + ' 時間前';
  } else if(delta < (48*60*60)) {
    return '昨日';
  } else {
    return (parseInt(delta / 86400)).toString() + ' 日前';
  }
}