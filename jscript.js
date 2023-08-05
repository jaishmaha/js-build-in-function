//Number Methods

//1.toFixed()
var a=13.4561;
var res=a.toFixed();
var res1=a.toFixed(3);
console.log(res);
console.log(res1);

//2.toString()
var text='Hello World';
var showAns=text.toString();
console.log(showAns);

//3.valueOf()
var num=13025.67;
var showAns=num.valueOf();
console.log(showAns);

//Boolean Methods

//4. toString()
var flag = false; 
console.log(flag.toString() );
//5. valueOf()
var flag = false; 
console.log(flag.valueOf() ); 

// String Methods
	
//charAt() to find the character at a particular index.
var text='Hello World';
var showAns=text.charAt(3);
var showAns=text.charAt(4);
var showAns=text.charAt(1);
console.log(showAns);

//concat() adds two or more strings and returns a new single string.
var text1='Hello World';
var text2='Hello World';
var newStr=text1.concat(text2);
console.log(newStr);

//indexOf() returns the index within the calling String object of the 'first' occurrence of the specified value.
var text1='Hi, Hello World Hello';
var res=text1.indexOf("hello"); // if value not founf return -1
console.log(res);
var res=text1.indexOf("Hello");
console.log(res);

// lastIndexOf() returns the index within the calling String object of the 'last' occurrence of the specified value.
var text1='Hi, Hello world. welcome to the new world';
var res=text1.lastIndexOf("hello"); // if value not founf return -1
console.log(res);
var res=text1.lastIndexOf("world");
console.log(res);

// length() returns the number of characters in a string.
var text1='Hi, Hello world.';
var res=text1.length; 
console.log(res);

// split() splits a String object into an array of strings by separating the string into substrings.
var text='Hi, Hello world. welcome to the new world.'
var res=text.split(" ",3);
console.log(res);

// slice() extracts a section of a string and returns a new string.
var text='Hi, Hello world. welcome to the new world.'
var res=text.slice(4,13);
console.log(res);

// toLowerCase()
var text='Hi, Hello world. welcome to the new world.'
var res=text.toLowerCase();
console.log(res);

// toUpperCase()
var text='Hi, Hello world. welcome to the new world.'
var res=text.toUpperCase();
console.log(res);

// toString() Returns a string representing the specified object.
var text='Hi, Hello world. welcome to the new world.'
console.log(text.toString());

// valueOf()	Returns the primitive value of the specified object.
var text='Hi, Hello world. welcome to the new world.'
console.log(text.valueOf());


// Date Methods
	
// Date()	Returns today's date and time
var date= Date();
console.log(date);

// getDate()
var date= new Date("Sat Aug 05 2023 19:24:24");
console.log(date.getDate());

// getFullYear()
var date= new Date("Sat Aug 05 2023 19:24:24");
console.log(date.getFullYear());

// getHours()
var date= new Date("Sat Aug 05 2023 19:24:24");
console.log(date.getHours());

// getMilliseconds()
var date= new Date();
console.log(date.getMilliseconds());

// getMinutes()
var date= new Date("Sat Aug 05 2023 19:24:24");
console.log(date.getMinutes());
	
// getMonth()
var date= new Date("Sat Aug 05 2023 19:24:24");
console.log(date.getMonth());

// getSeconds()
var date= new Date("Sat Aug 05 2023 19:24:24");
console.log(date.getSeconds());
