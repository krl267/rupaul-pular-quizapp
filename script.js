$(document).ready(function() {
	$('#on-load').show();
	$('#choose-a-name').hide();
	$('#choose-a-queen').hide();
	$('#difficulty').hide();
	$('#game-app').hide();

	/* -- Sets which page is currently open -- */
	var page = 'landing';


	/* -- Downloads all Ru's sounds and places them in an array -- */
	var ruLaugh = new Audio('sounds/rupaullaugh.mp3');
	var youBW = new Audio('sounds/youBW.mp3');
	var sissyTW = new Audio('sounds/sissyTW.mp3');
	var libary = new Audio('sounds/libary.mp3');
	var ltmp = new Audio('sounds/ltmp.mp3');
	var ruPaulSounds = [ruLaugh, youBW, sissyTW, libary, ltmp];


	/* -- a function that plays ru's sounds at random -- */
	function ruSounds () {
		if (page == 'landing') {
			var length = ruPaulSounds.length;
			var num = Math.floor(Math.random() * length);
			if (num != lastnum) {
				ruPaulSounds[num].play();
			}else{
				var num = Math.floor(Math.random() * length);
				ruPaulSounds[num].play();
			}
			var lastnum = num;
		}
	}
	
	

	/* -- While on the main page, repeat ruSounds() every 15 seconds -- */
	ruSounds();
	setInterval(ruSounds, 6000);
















});