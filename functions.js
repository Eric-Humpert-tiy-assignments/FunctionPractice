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
console.log(max(4, 7));
console.log(max(7, 4));
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
console.log(maxOfThree(3, 2, 1));
console.log(maxOfThree(1, 4, 3));
console.log(maxOfThree(5, 2, 3));
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
    var vowels = ["a", "e", "i", "o", "u", " "];
    var output = '';
    for (var i = 0; i < phrase.length; i++){
      var letter = phrase.charAt(i);
      if (vowels.indexOf(letter) !== -1) {
        output = (output + letter);
      }else {
        output = (output + letter + "o" + letter);
      }
    }

    return output;
}
console.log(rovarspraket("this is fun"));

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(numbers){
    "use strict";
    //...
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
}
console.log(sum([1, 2, 3, 4, 5]));

console.assert(sum([1, 2, 3, 4, 5]) === 15, 'you did not sum correctly');
function multiply(numbers){
    "use strict";
    //...
    var product = 1;
    for (var i = 1; i < numbers[i]; i++) {
      product *= numbers[i];
    }
    return product;
}
console.log(multiply([1, 2, 3, 4, 5]));
console.assert(multiply([1, 2, 3, 4, 5]) === 120, "your multiplication was off");

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
    var count = 0;
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > count) {
        count = words[i].length;
      }
    }
    return count;
}
console.log(findLongestWord(['Dom', 'Gouf', 'Zaku II', 'Guncannon', 'Guntank', 'Gundam']));
console.assert(findLongestWord(['Dom', 'Gouf', 'Zaku II', 'Guncannon', 'Guntank', 'Gundam']), "You didn't write the code properly.")
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
    var longies = [];
    for (var j = 0; j < words.length; j++){
      if (words[j].length > i) {
        longies[longies.length] = words[j];
      }
    }
    return longies;
}
console.log(filterLongWords(['car', 'truck', 'Gundam', 'tank'], 4));
console.assert(filterLongWords(['car', 'truck', 'Gundam', 'tank'], 9), 'the words are not over the length you entered!');
// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
    var count = {};
    for (var i = 0; i < string.length; i++){
      count[string[i]] = 1 + (count[string[i]] || 0);
    }
    return count;
}
console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));
console.assert(charFreq("abbabcbdbabdbdbabababcbcbab"));
