function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
var d = new Date();
var m = d.getMonth();
var dy = d.getDate();
var td = ""+ m + dy;
var day ="" ;


if (td === '726'){
  day = "🤖";
} else if (td === '1224'|| td ==='1225'){
  day = "❄️";
} else if(td === '815'|| td === '1019'){
  day = "🇮🇳";
} else if (td === '1031'){
  day = "🎃"
}else{
  day = "🔑";
}




$('.cluster').click(function(){
  $('.icon').text(day);
  $('.success', this).css({'opacity':'1', 'transform':'translate3d(0,0,0)'});
  setTimeout(function(){
    $('.success').css({'opacity':'', 'transform':''});
  },1200);

});
