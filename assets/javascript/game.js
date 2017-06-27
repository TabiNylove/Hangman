var word = [
	["s", "e", "r", "e", "n", "d", "i", "p", "i", "t", "y"],

	["a", "b", "o", "r", "i", "g", "i", "n", "a", "l"],

	["e", "x", "a", "c", "e", "r", "b", "a", "t", "i", "o", "n"],

	["c", "o", "l", "o", "n", "o", "s", "c", "o", "p", "y"],

	["a", "c", "e", "t", "y", "l", "c", "h", "o", "l", "i", "n", "e"],

	["p", "o", "l", "y", "n", "o", "m", "i", "a", "l"],

	["a", "d", "j", "u", "d", "i", "c", "a", "t", "i", "o", "n"],
]
//pick a random number between 0 and word.length
var random =
	Math.floor(Math.random() * (word.length - 1));

//pull the array that matches the number and record in console
var randomWord = word[random];
	console.log("Random Word: " + randomWord);

var underscoreLine = [];
for (var i = 0; i < randomWord.length; i++) {

	underscoreLine.push("_ ");

}
console.log("Word: " + underscoreLine);