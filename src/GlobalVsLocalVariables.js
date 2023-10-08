/*
Add a local variable to myOutfit function to override the value of outerWear with the string sweater.
*/

var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}

console.log(myOutfit());