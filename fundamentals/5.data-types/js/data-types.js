/*
	JavaScript is a "dynamically-typed" programming language which means that a variable is not bound to any type. It is simply stored in memory according to its value.

	There are seven basic data types in JavaScript.
*/

/*
	Number -- which represents both integers and floating point numbers.

	Besides regular numbers, there are the "special numeric values", which are Infinity, -Infinity, NaN (Not a Number). These special numeric values belong to Number data type.

	This concludes that all mathematical operations in JavaScript are safe. None will return a fatal error. At worst we will get a "NaN".
*/
let n = 123;
n = 123.123;

alert(1/0);
alert(Infinity);

alert('some string' / 2);
alert('some string' / 2 + 5); // returns NaN again because NaN is sticky

/*
	String -- which are represented by double, single quotes, or even backticks ``

	Backticks in JavaScript have an "extended functionality" which we can embed variables and expressions into string by wrapping them in ${...}.
*/
let name = 'John';

// embed a variable
alert(`Hello, ${name}!`); // Hello, John!

// embed an expression
alert(`the result is ${1+2}!`); // the result is 3!

// wrong embed expression with simple quotes and not backticks
alert('the result is ${1+2}!'); // the result is ${1+2}!

/*
	Boolean -- two values, true and false.

	Boolean values can be assigned to variables or evaluates from an expression.
*/

let nameFieldChecked = true;

let isGreater = 4 < 1;
alert(isGreater); // false (the comparison result)

/*
	"Null" -- It is a separate type of its own, does not belong to any of the other types.

	In JavaScript null is not a reference to a non-existing object, or a null pointer like in some other languages. It is a value which represents "nothing".
*/
let age = null

/*
	"Undefined" -- Another separate type of its own

	It means "value is not assigned"

	Technically you can assign a variable to "undefined" but it is not recommended. It is better to assign such variable with "Null"
*/
let x;
alert(x); // shows "undefined" since the variable has no value

/*
	Objects -- A special data type which is not in the same category as the "primitive" types. Primitive types can contain only a single thing (even a string). In contrast objects contain a collection of data
*/

/*
	Symbol -- A type which is used to create a unique identifier for objects
*/

// Pro tip! the "typeof" operator returns the type of argument.
x = 2;
alert(typeof true);
alert(typeof(x)); // returns number