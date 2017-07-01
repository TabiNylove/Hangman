// TEST
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

		// raise the counter by 1
		counter++;
	}
//===============================================================================

//PRESSING KEYS

// start function to detect a keystroke
	window.addEventListener("keydown", function(event) {

		// the keystroke will become var "userKey"
  		let userKey = event.key;

  		// if keystroke matches the letter in the random word ...
  		for (var i = 0; i < randomWord.length; i++) {
  			randomWord[i]

  			if (userKey === randomWord[0]) {
  		
  			// ... put the letter into the corresponding <p> tag
  			var letter0 = document.getElementById("0");
  			letter0.innerHTML = (userKey + " ");
  				// (use innerHTML to overwrite "_ ")

  			console.log("Yes: " + userKey);
  			}
  		}
  		
  		
	}, true);






//===================================================================
// //WORD SELECTION
// var word = [
// 	["s", "e", "r", "e", "n", "d", "i", "p", "i", "t", "y"],

// 	["a", "b", "o", "r", "i", "g", "i", "n", "a", "l"],

// 	["e", "x", "a", "c", "e", "r", "b", "a", "t", "i", "o", "n"],

// 	["c", "o", "l", "o", "n", "o", "s", "c", "o", "p", "y"],

// 	["a", "c", "e", "t", "y", "l", "c", "h", "o", "l", "i", "n", "e"],

// 	["p", "o", "l", "y", "n", "o", "m", "i", "a", "l"],

// 	["a", "d", "j", "u", "d", "i", "c", "a", "t", "i", "o", "n"],
// ]
// // pick a random number between 0 and word.length
// 	var random =
// 		Math.floor(Math.random() * (word.length - 1));

// // pull the array that matches the random number and record it in console
// 	var randomWord = word[random];
// 		console.log("Random Word: " + randomWord);

// //==============================================================================

// //UNDERSCORE

// // declare the <div> that the underscores will go inside of
// 	var underscoreDiv = document.getElementById("underscoreDiv");

// // make a var to help count and name each <p> tag in the <div> with a number: <p id="1"></p>
// 	var counter = 0;

// // for each letter in the random word, make a <p> tag with an ID and an underscore inside
// 	for (var i = 0; i < randomWord.length; i++) {

// 		// create <p> tags with an underscore as text
// 		var blankP = document.createElement("p");
// 		var blankSpace = document.createTextNode("_ ");
// 		blankP.appendChild(blankSpace);

// 		// append the <p> tags to the <div> above
// 		underscoreDiv.appendChild(blankP);

// 		// set a number id for each <p> tag
// 		blankP.setAttribute("id", counter);

// 		// raise the counter by 1
// 		counter++;
// 	}
// //===============================================================================

// //PRESSING KEYS

// // start function to detect a keystroke
// 	window.addEventListener("keydown", function(event) {

// 		// the keystroke will become var "userKey"
//   		let userKey = event.key;

//   		// if keystroke matches the letter in the random word ...
  		
//   		if (userKey === randomWord[0]) {
  		
//   			// ... put the letter into the corresponding <p> tag
//   			var letter0 = document.getElementById("0");
//   			letter0.innerHTML = (userKey + " ");
//   				// (use innerHTML to overwrite "_ ")

//   			console.log("Yes: " + userKey);

//   		// REPEAT ? ? ?
//   		// need a function or for loop here ..................

//   		} else if (userKey === randomWord[1]) {
//   			var letter1 = document.getElementById("1");
//   			letter1.innerHTML = (userKey + " ");

//   		} else if (userKey === randomWord[2]) {
//   			var letter2 = document.getElementById("2");
//   			letter2.innerHTML = (userKey + " ");

//   		} else if (userKey === randomWord[3]) {
//   			var letter3 = document.getElementById("3");
//   			letter3.innerHTML = (userKey + " ");

//   		} else if (userKey === randomWord[4]) {
//   			var letter4 = document.getElementById("4");
//   			letter4.innerHTML = (userKey + " ");
  			
//   		} else if (userKey === randomWord[5]) {
//   			var letter5 = document.getElementById("5");
//   			letter5.innerHTML = (userKey + " ");
  			
//   		} else if (userKey === randomWord[6]) {
//   			var letter6 = document.getElementById("6");
//   			letter6.innerHTML = (userKey + " ");
  			
//   		} else if (userKey === randomWord[7]) {
//   			var letter7 = document.getElementById("7");
//   			letter7.innerHTML = (userKey + " ");
  			
//   		} else if (userKey === randomWord[8]) {
//   			var letter8 = document.getElementById("8");
//   			letter8.innerHTML = (userKey + " ");
  			
//   		} else if (userKey === randomWord[9]) {
//   			var letter9 = document.getElementById("9");
//   			letter9.innerHTML = (userKey + " ");
  			
//   		} else if (userKey === randomWord[10]) {
//   			var letter10 = document.getElementById("10");
//   			letter10.innerHTML = (userKey + " ");
  			
//   		} else if (userKey === randomWord[11]) {
//   			var letter11 = document.getElementById("11");
//   			letter11.innerHTML = (userKey + " ");
  			
//   		} else if (userKey === randomWord[12]) {
//   			var letter12 = document.getElementById("12");
//   			letter12.innerHTML = (userKey + " ");
  			
//   		} else if (userKey === randomWord[13]) {
//   			var letter13 = document.getElementById("13");
//   			letter13.innerHTML = (userKey + " ");
//   		}
// 	}, true);





