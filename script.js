$(document).ready(function() {
	$('#on-load').show();
	$('#choose-a-name').hide();
	$('#choose-a-queen').hide();
	$('#difficulty').hide();
	$('#game-app').hide();

	/* -- List of important variables -- */
	var dragName = "";
	var dragMother = "";
	var dragNum = "";
	var counter = 0;
	var correct = 0;
	var difficulty = 0;



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
	var easyQuestionList = [
	/* -- Easy Question 1 -- */
		{
			difficulty: 'easy',
			question: "Who is Seattle's premier narcoleptic drag queen?",
			answers: ['Raja','Trixie Mattel','Jinkx Monsoon','Alyssa Edwards'],
			correctAnswer: 2 
		},
	/* -- Easy Question 2 -- */
		 {
			difficulty: 'easy',
			question: "What is Bob the Drag Queen's catchphrase?",
			answers: ["I can't even",'Purse First',"I'm polish remover",'Party'],
			correctAnswer: 1 
		 },
	/*Easy Question 3 -- */
		{
		difficulty: 'easy',
		question: 'On which series did Courtney Act and Adore Delano also compete in?',
		answers: ['American Idol','X Factor','Americas Got Talent','Dancing with the Stars'],
		correctAnswer: 0 
		},
	/* -- Easy Question 4 -- */
	{
		difficulty: 'easy',
		question: 'Which Drag Race top-3 has a boyfriend who won Drag Race?',
		answers: ['Courtney Act','Kim Chi','Katya','Alaska Thunderfuck 5000'],
		correctAnswer: 3
	},
	/* -- Easy Question 5-- */
	{
		difficulty: 'easy',
		question: 'Complete the lyrics: Sissy that __________.',
		answers: ['walk','run','skip','runway pose'],
		correctAnswer: 0 
	}
	];

	var mediumQuestionList = [
	/* -- Easy Question 1 -- */
		{
			difficulty: 'medium',
			question: "Who is the first queen to win Drag Race All Stars?",
			answers: ['Jiggly Caliente','Latrice Royale','Raja','Chad Michaels'],
			correctAnswer: 3 
		},
	/* -- Easy Question 2 -- */
		 {
			difficulty: 'medium',
			question: "Who is the youngest person to win drag race?",
			answers: ["Tyra Sanchez",'Violet Chotsky',"Raja",'Bianca del Rio'],
			correctAnswer: 0 
		 },
	/*Easy Question 3 -- */
		{
		difficulty: 'medium',
		question: 'Which of the following queens was voted Miss Congeniality?',
		answers: ['Darienne Lake','Katya','Gia Gunn','Stacey Lane Mathews'],
		correctAnswer: 1
		},
	/* -- Easy Question 4 -- */
	{
		difficulty: 'medium',
		question: 'Who came out as having HIV/AIDS in season 6?',
		answers: ['Milk','Ben de la Creme','Tinity K Bonet','Mgnolia Crawford'],
		correctAnswer: 2
	},
	/* -- Easy Question 5-- */
	{
		difficulty: 'medium',
		question: "What was the name of Michelle Visage's girl group who she toured the world with?",
		answers: ['Spice Girls','702','Seduction','SaltNPeppa'],
		correctAnswer: 2
	}
	];

	var hardQuestionList = [
	/* -- Easy Question 1 -- */
		{
			difficulty: 'hard',
			question: "Mama Ru released a cover single with Elton John.  Which classic song did they sing together?",
			answers: ['I got you babe','Dont Go Breaking my Heart','Kids','Endless Love'],
			correctAnswer: 1 
		},
	/* -- Easy Question 2 -- */
		 {
			difficulty: 'hard',
			question: "What did Michelle Visage buy her Mom with her The Gaurdian royalty check?",
			answers: ["A house",'A Mercedes',"A horse",'A vacation'],
			correctAnswer: 0 
		 },
	/*Easy Question 3 -- */
		{
		difficulty: 'hard',
		question: 'Jade Joli keeps her arms thin by not lifting anything heavy.  What is the heaviest thing she will lift?',
		answers: ['5 lbs','10lbs','25lbs','50lbs'],
		correctAnswer: 2 
		},
	/* -- Easy Question 4 -- */
	{
		difficulty: 'hard',
		question: 'Which artist has been lip synced?',
		answers: ['Madonna','Paula Adbul','Donna Summers','Kylie Minogue'],
		correctAnswer: 1
	},
	/* -- Easy Question 5-- */
	{
		difficulty: 'hard',
		question: 'Who has not been a guest judge on the show?',
		answers: ['Cher','Chaz Bono',"Cher's mom",'LaToya Jackson'],
		correctAnswer: 0 
	}
	];

	




	/* -- Function for Guessing the Correct Answer -- */





	/* -- List of Drag Mothers -- */
	var dragMotherList = [alaska, bob, alyssa, courtney, shangela];

	/* -- Sets which page is currently open -- */
	var page = 'landing';


	/* -- Downloads all Ru's sounds and places them in an array -- */
	var ruLaugh = new Audio('sounds/rupaullaugh.mp3');
	var youBW = new Audio('sounds/youBW.mp3');
	var sissyTW = new Audio('sounds/sissyTW.mp3');
	var libary = new Audio('sounds/libary.mp3');
	var ltmp = new Audio('sounds/ltmp.mp3');
	var ruPaulSounds = [ruLaugh, youBW, sissyTW, libary, ltmp];

	var bbmg = new Audio('sounds/bbmg.mp3');

	/* Alaska Sounds */
	var wigs = new Audio('sounds/wigs.mp3');
	var slay = new Audio('sounds/slay.mp3');
	var ding = new Audio('sounds/ding.mp3');
	var winner = new Audio('sounds/winnerchickendinner.mp3');
	var alaskaSounds = [wigs, slay, winner, ding, alaskaCA];

	/* Bob Sounds */
	var corn = new Audio('sounds/corn.mp3');
	var purse = new Audio('sounds/pursefirst.mp3');
	var bobSounds = [corn, purse, bobCA];

	/* Alyssa Sounds */
	var thatway = new Audio('sounds/thatway.mp3');
	var runway = new Audio('sounds/runway.mp3');
	var itsdrag = new Audio('sounds/itsdrag.mp3');
	var bippity = new Audio('sounds/bippity.mp3');
	var alyssaSounds = [thatway, runway, itsdrag, bippity, alyssaCA];

	/* Courtney Sounds */
	var australia = new Audio('sounds/australian.mp3');
	var supermodel = new Audio('sounds/supermodel.mp3');
	var whistle = new Audio('sounds/whistle.mp3');
	var courtneySounds = [australia, supermodel, whistle, courtneyCA];

	/* Shangela Sounds */
	var hallelu = new Audio('sounds/hallelu.mp3');
	var pineapple = new Audio('sounds/pineapple.mp3');
	var ribs = new Audio('sounds/ribs.mp3');
	var workWithMama = new Audio('sounds/workwithmama.mp3');
	var shangelaSounds = [hallelu, pineapple, ribs, workWithMama, shangelaCA];

	/* Other Sounds */
	var shantay = new Audio('sounds/youstay.mp3');
	var sashay = new Audio('sounds/sashay.mp3');
	var dontFuckItUp = new Audio('sounds/dontfuckitup.mp3');
	var otherSounds = [shantay,sashay,dontFuckItUp];

	var soundBites = [alaskaSounds,bobSounds,alyssaSounds,courtneySounds,shangelaSounds];





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
		if ($('#drag-name').val() != '') {
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
		}else {
			alert('If you cant love yourself how in the HELL you gon love somebody else?')
		}
	});

	/* -- Choose a drag mother choice -- */
	$('#first-choice').on('click', function() {
		dragMother = dragMotherList[0];
		dragNum = 0;
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
		dragNum = 1;
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
		dragNum = 2;
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
		dragNum = 3;
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
		dragNum = 4;
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
	function generateQuestion() {
		if (counter < easyQuestionList.length) {
			var k = counter+1;
			if (counter > 0) {
				catchPhrases(dragNum);
			}
			if (difficulty == 1) {
				$('#mc').empty();
				$('.question-text').empty().fadeIn(1200).prepend("<h1>Question " + k + "</h1><h2>"+easyQuestionList[counter].question+"</h2>");
				for(var i = 0 ; i < easyQuestionList[counter].answers.length; i++){
					$('#mc').append("<li><input type='radio' id='"+ i+1 + "-option' name='selector'><label for='" + i+1 + "-option' id='"+i+"-option-label'>" + easyQuestionList[counter].answers[i]+ "</label><div class='check'><div class='inside'></div></div></li>");
				}
				$('#counter').text(k + " of 5");
			}else if (difficulty == 2) {
				$('#mc').empty();
				$('.question-text').empty().fadeIn(1200).prepend("<h1>Question " + k + "</h1><h2>"+mediumQuestionList[counter].question+"</h2>");
				for(var i = 0 ; i < mediumQuestionList[counter].answers.length; i++){
					$('#mc').append("<li><input type='radio' id='"+ i+1 + "-option' name='selector'><label for='" + i+1 + "-option' id='"+i+"-option-label'>" + mediumQuestionList[counter].answers[i]+ "</label><div class='check'><div class='inside'></div></div></li>");
				}
				$('#counter').text(k + " of 5");
			}else if (difficulty == 3) {
				$('#mc').empty();
				$('.question-text').empty().fadeIn(1200).prepend("<h1>Question " + k + "</h1><h2>"+hardQuestionList[counter].question+"</h2>");
				for(var i = 0 ; i < hardQuestionList[counter].answers.length; i++){
					$('#mc').append("<li><input type='radio' id='"+ i+1 + "-option' name='selector'><label for='" + i+1 + "-option' id='"+i+"-option-label'>" + hardQuestionList[counter].answers[i]+ "</label><div class='check'><div class='inside'></div></div></li>");
				}
				$('#counter').text(k + " of 5");
			}
		}else {
			/* -- Last question -- shows user the score and is prompted to try again -- */
			if (correct >= 4) {
				otherSounds[0].play();
			}else{
				otherSounds[1].play();
			}
			$('#mc').empty();
			$('#answer').hide();
			$('.question-text').empty().prepend("<h1>Congratulations, "+dragName+ " on finishing the quiz. You got " + correct + " answers correct.</h1><div class='button' id='again'>Play Again!</div>")

		}
	}

	/* Generate sound effects when click Answer */
	function catchPhrases(num) {
		/* calls the drag queen's sound array */
		var j = soundBites[num].length;
		var random = Math.floor(Math.random() * j);
		soundBites[num][random].play();
	}


	
	/* -- Difficulty Selector -- */
	$('#easy').on('click', function() {
		difficulty = 1;
		otherSounds[2].play();
		generateQuestion();
		$('#difficulty').delay(1000).fadeOut(1100, function() {
			$(this).hide();
			$('#game-app').fadeIn(1100, function() {
				$(this).show();
			});
		});

	});

	$('#medium').on('click', function() {
		difficulty = 2;
		otherSounds[2].play();
		generateQuestion();
		$('#difficulty').delay(1000).fadeOut(1100, function() {
			$(this).hide();
			$('#game-app').fadeIn(1100, function() {
				$(this).show();
			});
		});

	});

	$('#hard').on('click', function() {
		difficulty = 3;
		otherSounds[2].play();
		generateQuestion();
		$('#difficulty').delay(1000).fadeOut(1100, function() {
			$(this).hide();
			$('#game-app').fadeIn(1100, function() {
				$(this).show();
			});
		});

	});

	/* -- Next Question -- */
	$('#answer').on('click',function() {
		/* -- Counter to make sure an answer was chosen */
		var j = 0;
		/* -- Counter to see if the chosen andswer is correct */
		/* Basically, B gets counted every time it loops, and
		c is set equal to the radio button that is checked */
		var b = 0;
		var c = 0;
		/*Check to make sure at least one button is selected*/
		var chx = document.getElementsByName('selector');
		for (var i=0; i<chx.length; i++) {
			if (chx[i].type == 'radio' &&  chx[i].checked){
				j++;
				c = b;
			}
			b++;
		}	
		if (j != 0) {
			
			if (difficulty == 1) {
				if (c == easyQuestionList[counter].correctAnswer) {
					$('.right-wrong').append("<img src='images/correct.png' >");
					correct++;
				}else {
					$('.right-wrong').append("<img src='images/wrong.png' >");
				}
			}else if (difficulty == 2) {
				if (c == mediumQuestionList[counter].correctAnswer) {
					$('.right-wrong').append("<img src='images/correct.png' >");
					correct++;
				}else {
					$('.right-wrong').append("<img src='images/wrong.png' >");
				}
			}else if (difficulty == 3){
				if (c == hardQuestionList[counter].correctAnswer) {
					$('.right-wrong').append("<img src='images/correct.png' >");
					correct++;
				}else {
					$('.right-wrong').append("<img src='images/wrong.png' >");
				}
			}
			counter++;
			generateQuestion();
		}else{
			alert("Select a fucking answer, darling.");
		}		
	});


	/*-- Play Again -- */
	$('#again').on('click', function() {
		console.log('click');
	});









});