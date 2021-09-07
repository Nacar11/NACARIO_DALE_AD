var height = 10;
var emptyString = '';

for (var i = 0; i < height; i++) {
    for (var j = 0; j <= i; j++) {
        emptyString += '*';
    }
    emptyString += '\n';
}
console.log(emptyString);