/*
	Semicolon tells the interpreter that a single command is to be executed.
	In some cases there is no need to a semicolon. A newline implies a semicolon
*/
alert('Hello, ')
alert('world!')

/*
	Here, "+" before newline is an "incomplete expression" so interpreter does not
	assume a semicolon, and the case works as intended. Again, semicolon is needed.
*/
alert(3+
	1
	+2);


/*
	In this example, as the interpreter parses the commands, it reaches the point
	where after the end of the alert method, stumbles upon square brackets,
	beginning of the second command. JavaScript interpreted does not assume a semicolon
	before square brackets.

	interpreted: 'alert('There will be an error')[1, 2].forEach(alert)'

	Thus, the above line is an error

	To fix this a semicolon has to be added at the end of alert method!
*/
alert('There will be an error')
[1, 2].forEach(alert)