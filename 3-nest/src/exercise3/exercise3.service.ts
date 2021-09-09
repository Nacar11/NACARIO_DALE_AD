import { Injectable } from '@nestjs/common';

@Injectable()
export class Exercise3Service {

helloWorld(name:String){
    console.log("hi");
    return "Hello there, "+ name;
}

loopsTriangle(height:number){
var emptyString = '';

for (var i = 0; i < height; i++) {
    for (var j = 0; j <= i; j++) {
        emptyString += '*';
    }
    emptyString += '\n';
}
console.log(emptyString);

}

primeNumber(number:number){
var isPrime = true;
if (number === 1) {
    console.log(` ${number} is neither prime nor composite number! `);
} else if (number > 1) {
    for (var i = 2; i < number; i++)
        if (number % i === 0) {
            isPrime = false;
            break;
        }
}



if (isPrime) {
    return ` The number ${number} is a prime number! `;
} else {
    
    return ` The number ${number} is not a prime number! `;
}

}

}