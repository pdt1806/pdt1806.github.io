var bgm = ['img/wallpaper.jpg', 'img/wallpaper2.jpg'];
$('body').css({
        'background' : 'url('+ bgm[Math.floor(Math.random() * bgm.length)] + ') no-repeat',
});

function playSound() {
	var audio = document.getElementById("audio");
	audio.currentTime = 0;
	audio.play();
}
function playSound2() {
	var audio = document.getElementById("audio2");
	audio.currentTime = 0;
	audio.play();
}
function playSound3() {
	var audio = document.getElementById("audio3");
	audio.currentTime = 0;
	audio.play();
}

function reverseString(str) {
	var newString = '';
	for (var i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}
	return newString;
}
function encodeFunc() {
	var input = document.getElementById("inputbox").value;
	var output = '';
	for (var i = 0; i < input.length; i++) {
		output = output + String.fromCharCode(input.charCodeAt(i)+1)
	}
	output = reverseString(output)
	document.getElementById("outputbox").value = output;
}
function decodeFunc() {
	var input = document.getElementById("inputbox").value;
	var output = '';
	for (var i = 0; i < input.length; i++) {
		output = output + String.fromCharCode(input.charCodeAt(i)-1)
	}
	output = reverseString(output)
	document.getElementById("outputbox").value = output;
}
function cls() {
	document.getElementById("inputbox").value = '';
}
function copy() {
	if (document.getElementById("outputbox").value != '') {
	  var output = document.getElementById("outputbox");
		output.select();
		output.setSelectionRange(0, 99999);
		document.execCommand("copy");
		document.getElementById("copyAlert").innerHTML = '    Copied to clipboard!';
		setTimeout(function(){
		document.getElementById("copyAlert").innerHTML = '';
		}, 3000);
	} else {
		document.getElementById("copyAlert").innerHTML = '    Nothing to copy.';
		setTimeout(function(){
		document.getElementById("copyAlert").innerHTML = '';
		}, 3000);
	}
}
