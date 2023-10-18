"use strict";

var firstName;
var lastName;

// assign a value "Daisy" to the variable labeled firstName
firstName = "Daisy";
// firstName has the value of "Daisy"

// assign a value of "Gonzalez" to the variable labeled lastName
lastName = "Gonzalez";
// lastName now has the variable of "Gonzalez"

var fullName;

// assign to the variable fullName the result of the expression "lastName + ", " + firstName".
// that expression will concatenate the value of lastName, with the literal value "," , followed by the value of firstName.
fullName = lastName + ", " + firstName;
// the value of fullName is now: "Gonzalez, Daisy"


var message;

// everything is quotation is plain english
message = "the user's full name is: " + fullName;

console.log(message);
console.log(firstName);
console.log(lastName);
console.log(fullName);


// var is a variable
// string is a value of a variable
// ex. (var: variable)(firstName: String)
// the syntax (console.log) is a function used to print variable

// conventions:
// all of the writing is in camelCase: e.g firstName
// end of every statement in Javascript (;) convention

// tips:
// [ // ] omits / comment in Javascript 
// command K + C (on keyboard) will omit/comment strings or statements 
// White space [enter, space and tab] do not matter 


