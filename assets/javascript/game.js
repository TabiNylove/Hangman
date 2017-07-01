

// TESTING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//WORD SELECTION
var word = [
	["s", "e", "r", "e", "n", "d", "i", "p", "i", "t", "y"],

	["a", "b", "o", "r", "i", "g", "i", "n", "a", "l"],

	["e", "x", "a", "c", "e", "r", "b", "a", "t", "i", "o", "n"],

	["c", "o", "l", "o", "n", "o", "s", "c", "o", "p", "y"],

	["a", "c", "e", "t", "y", "l", "c", "h", "o", "l", "i", "n", "e"],

	["p", "o", "l", "y", "n", "o", "m", "i", "a", "l"],

	["a", "d", "j", "u", "d", "i", "c", "a", "t", "i", "o", "n"],
]
// pick a random number between 0 and word.length
	var random =
		Math.floor(Math.random() * (word.length - 1));

// pull the array that matches the random number and record it in console
	var randomWord = word[random];
		console.log("Random Word: " + randomWord);

//==============================================================================

//UNDERSCORE

// declare the <div> that the underscores will go inside of
	var underscoreDiv = document.getElementById("underscoreDiv");

// make a var to help count and name each <p> tag in the <div> with a number: <p id="1"></p>
	var counter = 0;

// for each letter in the random word, make a <p> tag with an ID and an underscore inside
	for (var i = 0; i < randomWord.length; i++) {

		// create <p> tags with an underscore as text
		var blankP = document.createElement("p");
		var blankSpace = document.createTextNode("_ ");
		blankP.appendChild(blankSpace);

		// append the <p> tags to the <div> above
		underscoreDiv.appendChild(blankP);

		// set a number id for each <p> tag
		blankP.setAttribute("id", counter);
		blankP.setAttribute("class", "")

		// raise the counter by 1
		counter++;
	}
//===============================================================================

//PRESSING KEYS

	var guessCounter = 8;
	var guessNum = document.getElementById("guessNum")
	guessNum.innerHTML = guessCounter;


	// start function to detect a keystroke
	window.addEventListener("keyup", function(event) {

		// keystroke will become var "userKey"
  		let userKey = event.key;

  		
  		for (var i = 0; i < randomWord.length; i++) {

  			// if keystroke matches a letter in the random word ...
  			if (randomWord[i] === userKey) {

  				// ... replace "_ " with the corresponding letter
  				document.getElementById(i).innerHTML = userKey + " ";
  				console.log("Yes: " + userKey);
  				var correct = true;
			} 
  		}
  		// if keystroke is wrong----
  		if (!correct) {

  			// this adds the letter to a <p> tag
  			var wrongLetter = document.getElementById("wrongLetter");
  			var wLetterChild = document.createTextNode(userKey + " ");
  			wrongLetter.appendChild(wLetterChild);

  			// this decreases the guessCounter
  			guessCounter = guessCounter - 1;
  			guessNum.innerHTML = guessCounter;
  			console.log("No: " + userKey);

  			} else if (guessCounter === 0) {
  				// this is game over
  				alert("You can't see it, but your man has been hanged. Oops.")

  		}
	}, true);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!





