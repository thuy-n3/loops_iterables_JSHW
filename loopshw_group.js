/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

var sumOfArray = function (arr){
	var total = 0 
	for (var i=0; i < arr.length; i++){
		total = total + arr[i]
	
	return total 
}

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

var maxOfArray = function(Arr){
	var max = arr[0]

	for (var i = 0; i < arr.length; i++){
		if (typeof	arr[i] !== "number"){return NA}
		if (max < arr[i]){
			max = arr[i]
		}
		return max
	}




console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */
 
function isVowel(symbol){
	var vowelsArray= ['A','a','E','e','O','o','I','i','U','u']

	for (var i = 0; i < vowelsArray.length; i++){
		if (symbol === vowelsArray[i]){
			return true
		}
	} return false
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

 var reverse = function (oldString){
 	var newString = ''
 	for (var i = oldString.length - 1; i >=0; i--){ 
 		//STARTING AT 4 AND COUNTINGN DOWN TO ZERO

 		var letter = oldString[i]
 		newString = newString + letter
 			//log(newString)
 	}
 	return newString

 }


console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */

var fizzbuzz = function(input){

	var result = ""

		for (var i = 1; i <= input; i++){

			if(i%3 !== 0 && i%5 !== 0){

				result = result + "."
			}
			if (i%3 === 0 && i%5 !== 0){

				result = result + "fizz"
			}
			if (i%3 !== 0 && i%5 === 0){
				result = result + "buzz"
			}
			if (i%3 === 0 && i%5 === 0){
				result = result + "fizzbuzz"
			}
		}
	log(result)
	return result 
}


console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")

/**
 * Part 5 ????
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

 var noPunct = function(phrase){
 	var abc = "qwertyuiopasdfghjklzxcvbnm"
 	if (phrase !== alphabet){

 	}

 }

function findLongestWord(sentence){
    var arr = sentence.split(' ')
    var longestWord = ' ' 		//empty container 
    for (var i = 0; i < arr.length; i++){
    	var word = arr[i]
    	if (longestWord.length < word.length){
    		longestWord = word

    	}
    }
    return longestWord
}

console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */




console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);
