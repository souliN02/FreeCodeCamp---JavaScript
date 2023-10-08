/*
In this challenge, we provide you with a noun, a verb, an adjective and an adverb.
You need to form a complete sentence using words of your choice, along with the words we provide.
You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb.
You will then assign the formed string to the wordBlanks variable.
You should not change the words assigned to the variables.
*/
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "My " + myNoun + " is " + myAdjective + " and " + myVerb + " very " + myAdverb + ".";
console.log(wordBlanks);