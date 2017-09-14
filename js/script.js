function copyToClipboard(element) {
  var $temp = $("<input readonly=\"true\">");
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


function Cluster(name, ip, type){
  this.password = "D3l1ghtful5*";
  this.name = name;
  this.ip = ip;
  this.type = type;
  this.write = '<div class= \'cluster\'<h4>'+this.name+'</h4>'+'<p>'+this.type+'<br>'+this.ip+'</p></div>';
}

var ontimePC = new Cluster('OntimePC', '10.24.30.20', 'Prism Central');
var ontimePE = new Cluster('OntimePE', '10.24.30.20', 'Prism Element');
var ontimePH = new Cluster('OntimePh', '10.24.30.20', 'Prism hlement');

var dracarys = [ontimePC, ontimePE, ontimePH];

var i =0;
while (i<dracarys.length){
  $('.multi-clusters').append(dracarys[i].write);
  i++;
}



$('.cluster').click(function(){
  $('.icon').text(day);
  $('.success', this).css({'opacity':'1', 'transform':'translate3d(0,0,0)'});
  setTimeout(function(){
    $('.success').css({'opacity':'', 'transform':''});
  },1200);

});
