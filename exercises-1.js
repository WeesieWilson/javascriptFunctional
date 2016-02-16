/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // YOUR CODE HERE

}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    sum = 0;
    var args = [].slice.call(arguments);
    for(var i = 0; i < args.length; i += 1){
    sum += args[i];}
    return sum;

    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    sum = 0;
    var args = [].slice.call(arguments);
    for (var i = 0; i < args.length; i += 1){
    result = (sum += args[i])/args.length;}
    return result;
    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var array = [].slice.call(arguments);
    var largest = 0;
    for (var i = 0; i < array.length; i++) {
   if (array[i] > largest) {
     largest = array[i];
     }
   }
   return largest;



    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( largest(2, 4, 6, 8) === 8tu )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var bodyString = "";
    for(var i = 0; i < args.length; i++){
    bodyString += args[i] + " ";
    };
    var stringArray = bodyString.split(" ");
    console.log(stringArray);
//help from http://stackoverflow.com/questions/24223221/length-of-the-longest-string-passed-as-an-argument

    var largest = "";
    for (var i = 0; i < stringArray.length; i++) {
   if (stringArray[i].length > largest.length) {
     largest = stringArray[i];
     }
   }
   return largest;

    // .. do something with each element of args
    // YOUR CODE HERE
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()

// .concat()

// .indexOf()

// .split()

// .join()

// .pop()

// .push()

// .slice()

// .splice()

// .shift()

// .unshift()

// .filter()

// .map()
