/*
The editor has two console.logs to help you see what is happening.
Check the console as you code to see how it changes.
Declare a local variable myVar inside myLocalScope and run the tests.
*/

function myLocalScope() {
    var myVar = "Hello World";
    console.log(myVar);
}
myLocalScope();

console.log("outside myLocalScope", myVar);