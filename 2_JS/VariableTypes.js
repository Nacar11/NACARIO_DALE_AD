//javascript data types

var var1 = 13;
var var2 = "Nacario"
var var3 = true;
var var4;
var var5 = null;
var var6 = Symbol("Nacario");
var var7 = [1, 2, 3, 4, 5];


console.log(typeof var1); //number
console.log(typeof var2); //string
console.log(typeof var3); //boolean
console.log(typeof var4); //undefined
console.log(typeof var6); //symbol
console.log(typeof var7); //object

console.log(typeof var5); //null
console.log(`The variable ${var5} is of type ${typeof var5}`); //null, which is of type object