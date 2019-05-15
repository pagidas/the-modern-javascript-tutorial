/*
	The "let" keyword is used to create a variable in JavaScript. Another keyword exists in the JavaScript world which is a little different... and that is "var". The difference is the scope in which the variable exists, its lifecycle.
*/

// Variables can be declared in many ways
let message = 'Hello!';

// Another way... not preferred, but readable
let user = 'John', age = 25, message5 = 'Hello';

// Better way, since it's more readable
let user2 = 'John'
let age2 = 25
let message2 = 'Hello'

// Combining readability with single command. "Comma-first" style
let user3 = 'John'
  ,	age3 = 25
  , message3  = 'Hello';

// Simple multiline style...
let user4 = 'John',
	age4 = 25,
	message4 = 'Hello';

alert(user+", "+age+", "+message);