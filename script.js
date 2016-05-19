$(document).ready(function() {
	$('#on-load').hide();
	$('#choose-a-name').hide();
	$('#choose-a-queen').hide();
	$('#difficulty').show();
	$('#game-app').hide();

	/* -- List of important variables -- */
	var dragName = "";
	var dragMother = "";
	var counter = 0;



	/* -- Choose a Mother Sounds -- */
	var alaskaCA = new Audio('sounds/hiee.mp3');
	var bobCA = new Audio('sounds/eatababy.mp3');
	var alyssaCA = new Audio('sounds/backrolls.mp3');
	var courtneyCA = new Audio('sounds/courtney.mp3');
	var shangelaCA = new Audio('sounds/shangela.mp3');

	

	var dragQueen = {
		name: '',
		codeName: '',
		choiceAudio: '',
		img: ''
	}

	var alaska = Object.create(dragQueen);
	alaska.name = 'Alaska Thunderfuck 5000';
	alaska.codeName = 'alaska';
	alaska.choiceAudio = alaskaCA;
	alaska.img = 'images/alaska.png';

	var bob = Object.create(dragQueen);
	bob.name = 'Bob the Drag Queen';
	bob.choiceAudio = bobCA;
	bob.img = 'images/bob.png';
	bob.codeName = 'bob';

	var alyssa = Object.create(dragQueen);
	alyssa.name = 'Alyssa Edwards';
	alyssa.choiceAudio = alyssaCA;
	alyssa.img = 'images/alyssa.png';
	alyssa.codeName = 'alyssa';

	var courtney = Object.create(dragQueen);
	courtney.name = "Courtney Act";
	courtney.choiceAudio = courtneyCA;
	courtney.img = 'images/courtney.png';
	courtney.codeName = 'courtney';

	var shangela = Object.create(dragQueen);
	shangela.name = "Shangela Laquifa Wadley";
	shangela.choiceAudio = shangelaCA;
	shangela.img = 'images/shangela.png'
	shangela.codeName = 'shangela';


	/* -- Questions List -- */
	var Question = {
		difficulty: '',
		question: '',
		answers: ['','','',''],
		correctAnswer: '' 
	}

	
/* -- easy questions -- */
	var question1 = {
		difficulty: 'easy',
		question: 'Text of Question 1',
		answers: ['cat','dog','mouse','crumb'],
		correctAnswer: 'cat' 
	}

	var question2 = {
		difficulty: 'easy',
		question: 'Test of Question 2',
		answers: ['cat','dog','mouse','crumb'],
		correctAnswer: 'dog' 
	}

	var question3 = {
		difficulty: 'easy',
		question: 'Wext of Question 3',
		answers: ['cat','dog','mouse','crumb'],
		correctAnswer: 'mouse' 
	}

	var question4 = {
		difficulty: 'easy',
		question: 'Text of Question 4',
		answers: ['cat','dog','mouse','crumb'],
		correctAnswer: 'crumb' 
	}

	var question5= {
		difficulty: 'easy',
		question: 'Text of Question 5',
		answers: ['cat','mouse','dog','crumb'],
		correctAnswer: 'dog' 
	}

	var easyQuestionList = [question1, question2, question3, question4, question5];




	/* -- Function for Guessing the Correct Answer -- */





	/* -- List of Drag Mothers -- */
	var dragMotherList = [alaska, bob, alyssa, courtney, shangela];

	/* -- Sets which page is currently open -- */
	var page = '';


	/* -- Downloads all Ru's sounds and places them in an array -- */
	var ruLaugh = new Audio('sounds/rupaullaugh.mp3');
	var youBW = new Audio('sounds/youBW.mp3');
	var sissyTW = new Audio('sounds/sissyTW.mp3');
	var libary = new Audio('sounds/libary.mp3');
	var ltmp = new Audio('sounds/ltmp.mp3');
	var ruPaulSounds = [ruLaugh, youBW, sissyTW, libary, ltmp];

	var bbmg = new Audio('sounds/bbmg.mp3');


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


	/* -- Move to Drag Name Selection -- */
	$('#play-button').on('click', function() {
		page = 'choose';
		$('#on-load').fadeOut(1100, function() {
			$(this).hide();
			$('#choose-a-name').fadeIn(1100, function() {
				$(this).show();
			});
		});
	});


	/* -- Save drag name and move to choose a mother section -- */
	$('#submit').on('click', function() {
		var dragText = document.getElementById('drag-name');
		dragName = dragText.value;
		bbmg.play();
		$('#caq-text').text("Wow " + dragName + " is a fierce name.  Now choose a drag mother to help you on your journey.");
		$('#choose-a-name').delay(5000).fadeOut(1100, function() {
			$(this).hide();
			$('#choose-a-queen').fadeIn(1100, function() {
				$(this).show();
			});
		});
	});

	/* -- Choose a drag mother choice -- */
	$('#first-choice').on('click', function() {
		dragMother = dragMotherList[0];
		$('#difficulty').append("<img class='rupaul-image' src='images/"+dragMother.codeName+".png' >");
		$('#game-app').append("<img class='rupaul-image' src='images/"+dragMother.codeName+".png' >");
		dragMother.choiceAudio.play();
		$('#choose-a-queen').delay(1000).fadeOut(1100, function() {
			$(this).hide();
			$('#difficulty').fadeIn(1100, function() {
				$(this).show();
			});
		});

	});

	$('#second-choice').on('click', function() {
		dragMother = dragMotherList[1];
		$('#difficulty').append("<img class='rupaul-image' src='images/"+dragMother.codeName+".png' >");
		$('#game-app').append("<img class='rupaul-image' src='images/"+dragMother.codeName+".png' >");
		dragMother.choiceAudio.play();
		$('#choose-a-queen').delay(2000).fadeOut(1100, function() {
			$(this).hide();
			$('#difficulty').fadeIn(1100, function() {
				$(this).show();
			});
		});

	});

	$('#third-choice').on('click', function() {
		dragMother = dragMotherList[2];
		$('#difficulty').append("<img class='rupaul-image' src='images/"+dragMother.codeName+".png' >");
		$('#game-app').append("<img class='rupaul-image' src='images/"+dragMother.codeName+".png' >");
		dragMother.choiceAudio.play();
		$('#choose-a-queen').delay(500).fadeOut(1100, function() {
			$(this).hide();
			$('#difficulty').fadeIn(1100, function() {
				$(this).show();
			});
		});

	});

	$('#fourth-choice').on('click', function() {
		dragMother = dragMotherList[3];
		$('#difficulty').append("<img class='rupaul-image' src='images/"+dragMother.codeName+".png' >");
		$('#game-app').append("<img class='rupaul-image' src='images/"+dragMother.codeName+".png' >");
		dragMother.choiceAudio.play();
		$('#choose-a-queen').delay(3000).fadeOut(1100, function() {
			$(this).hide();
			$('#difficulty').fadeIn(1100, function() {
				$(this).show();
			});
		});

	});

	$('#fifth-choice').on('click', function() {
		dragMother = dragMotherList[4];
		dragMother.choiceAudio.play();
		$('#difficulty').append("<img class='rupaul-image' src='images/"+dragMother.codeName+".png' >");
		$('#game-app').append("<img class='rupaul-image' src='images/"+dragMother.codeName+".png' >");
		$('#choose-a-queen').delay(750).fadeOut(1100, function() {
			$(this).hide();
			$('#difficulty').fadeIn(1100, function() {
				$(this).show();
			});
		});

	});

	/*--  Creat the first question -- */
	function generateEasyQuestion() {
		if (counter == 0) {
			$('.question-text').append("<h2>"+easyQuestionList[counter].question+"</h2>");
			for(var i = 0 ; i < easyQuestionList[counter].answers.length; i++){
				$('#mc').append("<li><input type='radio' id='"+ i+1 + "-option' name='selector'><label for='" + i+1 + "-option' id='"+i+"-option-label'>" + easyQuestionList[counter].answers[i]+ "</label><div class='check'><div class='inside'></div></div></li>");
			}
			counter ++;
			$('#counter').text(counter + " of 5")
		}else if (counter < easyQuestionList.length) {
			/*-- Changes to next question -- */


		}else {
			/* -- Last question -- shows user the score and is prompted to try again -- */
		

		}
	}
	
	


	/* -- Difficulty Selector -- */
	$('#easy').on('click', function() {
		generateEasyQuestion();
		$('#difficulty').delay(1000).fadeOut(1100, function() {
			$(this).hide();
			$('#game-app').fadeIn(1100, function() {
				$(this).show();
			});
		});

	});








});