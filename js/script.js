var oAudio = document.getElementsByTagName('audio')[0];
var oPlay = document.getElementsByClassName('play')[0];
var tag=true;

$('soundplayer').onclick = function(){
	if(tag){
		tag = false;
		oAudio.pause();
		oPlay.className = '';
	}else{
		tag = true;
		oAudio.play();
		oPlay.className = 'play';
	}
}

$('a').onclick = function(){
	$('yes').style.display = 'block';
	$('yes').onclick = function(){
		location.reload();
	}
}

$('b').onclick = function(){
	$('no').style.display = 'block';
	$('no').onclick = function(){
		location.reload();
	}
}

function $(id){
	return document.getElementById(id);
}