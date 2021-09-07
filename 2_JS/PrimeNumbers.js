var number = 17;
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
    console.log(` ${number} is a prime number! `);
} else {
    console.log(` ${number} is not a prime number! `);
}