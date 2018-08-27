
// We now set out an array that has the questions, choices, and correct answers. each item in the array is an object. The choices items has an arraw as an answer
var questions = [{
	question: "In which game did Mario make his first appearance?",
	choices: ["Super Mario Bros.", "Donkey Kong", "Baloon Fight", "Duck Hunt"],
	answer: "Donkey Kong"
}, {
	question: "What was Mario's original name? (in Japan)",
	choices: ["Jumpman", "Donkey Kong", "Luigi", "Satoshi"],
	answer: "Jumpman"
}, {
	question: "What is the title of the first video game?",
	choices: ["Space War", "Pong", "Pacman", "Tennis for Two"],
	answer: "Tennis for Two"
}, {
	question: "In the Pokemon series, Charmander is weak against:",
	choices: ["Rock", "Grass", "Water", "Ice"],
	answer: "Water"
}, {
	question: "Who is the main character in the Legend of Zelda series?",
	choices: ["Tingle", "Zelda", "Link", "Gannon"],
	answer: "Link"
}, {
	question: "Which of the following is NOT a Street Fighter character?",
	choices: ["Bison", "Marshall Law", "Ken", "Cammy White"],
	answer: "Marshall Law"
}, {
	question: "Which video game was so infamously bad and overhyped that it crashed the video game industry in the 1970s?",
	choices: ["Poltergeist", "Star Trek: The Video Game", "Close Encounters of the Third Kind", "E.T."],
	answer: "E.T."
}, {
	question: "Which of the following games were developed by the famous studio Naughty Dog?",
	choices: ["Ratchet and Clank", "Toejam and Earl", "Crash Bandicoot: Twinsanity", "Jak X: Combat Racing"],
	answer: "Jak X: Combat Racing"
}, {
	question: "Which game console was released first?",
	choices: ["Playstation 2", "Dreamcast", "X-box", "Gamecube"],
	answer: "Dreamcast"
}, {
	question: "In 1996, the first video game packaged in a cereal box appeard. The name of the game was:",
	choices: ["Lucky Charms Adventure", "Chex Quest", "Carmen Sandiego in Kellogs Land", "Nabisco World"],
	answer: "Chex Quest"
}];

// Press the button to start the game
$("#startGame").on("click", function () {
	game.start()

});

// Basic game logic object
var game = {
	correct: 0,
	incorrect: 0,
	counter: 1000,
	countdown: function () {
		game.counter--;
		$("#counter").html(game.counter);
		if (game.counter <= 0) {
			console.log("Time is up!")
			game.done();
		}
	},
	start: function () {
		timer = setInterval(game.countdown, 10000)
		$("#content").prepend("<h2>Time Remaining: <span id = 'counter'>120</span> Seconds </h2>")

		$("#startGame").remove(); //This gets rid of the button when you start game
		//loop through the questions array
		for (var i = 0; i < questions.length; i++) {
			$("#content").append("<h2>" + questions[i].question + "</h2>");
			//now loop through the items in each chpice array
			for (var j = 0; j < questions[i].choices.length; j++) {
				$("#content").append("<input type = 'radio' name = 'question-" + i + "'value = '" + questions[i].choices[j] + "'>" + questions[i].choices[j]);

			}

		}
		$("#content").append("<br> <button id = 'end'>DONE</button>")
		$(document).on("click", "#end", function () {
			game.done();
		})

	},
	done: function () {
		$.each($("input[name='question-0']:checked"), function () {
			if ($(this).val === questions[0].answer) {
				game.correct++;
			} else {
				game.incorrect++;
			}


		});

		$.each($("input[name='question-1']:checked"), function () {
			if ($(this).val === questions[1].answer) {
				game.correct++;
			} else {
				game.incorrect++;
			}

		});
		$.each($("input[name='question-2']:checked"), function () {
			if ($(this).val === questions[2].answer) {
				game.correct++;
			} else {
				game.incorrect++;
			}

		});
		$.each($("input[name='question-3']:checked"), function () {
			if ($(this).val === questions[3].answer) {
				game.correct++;
			} else {
				game.incorrect++;
			}

		});
		$.each($("input[name='question-4']:checked"), function () {
			if ($(this).val === questions[4].answer) {
				game.correct++;
			} else {
				game.incorrect++;
			}

		});
		$.each($("input[name='question-5']:checked"), function () {
			if ($(this).val === questions[5].answer) {
				game.correct++;
			} else {
				game.incorrect++;
			}

		});
		$.each($("input[name='question-6']:checked"), function () {
			if ($(this).val === questions[6].answer) {
				game.correct++;
			} else {
				game.incorrect++;
			}

		});
		$.each($("input[name='question-7']:checked"), function () {
			if ($(this).val === questions[7].answer) {
				game.correct++;
			} else {
				game.incorrect++;
			}

		});
		$.each($("input[name='question-8']:checked"), function () {
			if ($(this).val === questions[8].answer) {
				game.correct++;
			} else {
				game.incorrect++;
			}

		});
		$.each($("input[name='question-9']:checked"), function () {
			if ($(this).val === questions[9].answer) {
				game.correct++;
			} else {
				game.incorrect++;
			}


		});

		this.result();

	},
	result: function () {
		clearInterval(timer);
		$("#content h2").remove();
		$("#content").html("<h2> All Done!</h2>");
		$("#content").append("<h3>Correct Answer: " + this.correct + "</h3>");
		$("#content").append("<h3>Incorrect Answer: " + this.incorrect + "</h3>");
		$("#content").append("<h3> Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h2>");

	}
}



