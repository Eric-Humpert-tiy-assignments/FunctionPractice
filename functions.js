// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(first, second){
    "use strict";
    //...
    if (first > second) {
      return first;
    } else {
      return second;
    }
}

console.assert(max(4, 7) === 7, 'you did not get max right');
console.assert(max(7, 4) === 7, 'you did not get max right');
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(first, second, third){
    "use strict";
    //...
    if (first > second && first >third){
      return first;
    }else if (second > first && second > third) {
      return second;
    }else if (third > first && third > second){
      return third;
    }
}
console.assert(maxOfThree(3, 2, 1) === 3, 'you did not find the greatest number');
console.assert(maxOfThree(1, 4, 3) === 4, 'you did not find the greatest number');
console.assert(maxOfThree(5, 2, 3) === 5, 'you did not find the greatest number');


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    //...
    if ('aeiou'.indexOf(char) === -1) {
      return false;
    } else;
    return true;

}
//console.assert(isVowel('r'), 'that is not a vowel!');
console.assert(isVowel('e'), 'that is not a vowel');
// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    //...

}


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(numbers){
    "use strict";
    //...
}

//console.assert(sum(1, 2, 3, 4, 5) === 15, 'you did not sum correctly');
function multiply(){
    "use strict";
    //...
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
    "use strict";
    //...
    var output = '';
    for (var i = phrase.length - 1; i >= 0; i--) {
      output += phrase[i];
    }
    return output;
}

console.log(reverse('jag tester'));
console.assert(reverse('dog trainer') === 'reniart god', 'you did not reverse the values correctly');

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
