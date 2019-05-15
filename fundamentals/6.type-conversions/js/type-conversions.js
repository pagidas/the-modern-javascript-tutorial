/*
	Type conversions for primitive types.
*/

/*
	ToString -- converts given primitive type to a string.
*/
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string, "true"
alert(typeof value); // string

/*
	ToNumber -- converts given primitive type to a number.

	Number conversions can happen in mathematical functions and expressions automatically. Another way is with Number()

	If a given string for example is not a number, the conversion cannot happen and thus NaN is returned. So a complex string can be converted to a number using other libraries and not Number()
*/
alert("6" / "2"); // 3, strings are converted to numbers because of the operand

alert(1 + '2'); // 12, "+" is an exception since it means concatination and not addition.

let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123
alert(typeof num); // number

let age = Number('an abstract string instead of a number in string form');
alert(age); // returns NaN but typeof returns number since NaN is number type

/*
	ToBoolean  -- converts given primitive type to a boolean value
*/
alert(Boolean(1)) // true
alert(Boolean(0)) // false
alert(Boolean('hello')) // true
alert(Boolean('')) // false