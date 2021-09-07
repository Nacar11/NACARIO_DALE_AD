var mTable = ' 0 ';
for (var i = 0; i < 11; i++) {

    for (var j = 0; j < 11; j++) {

        if (i == 0 && j > 0) {
            mTable += '[' + j + ']';
        } else if (j == 0 && i > 0) {
            mTable += '[' + i + '] ';
        } else if (i > 0 && j > 0) {
            mTable += (i * j) + ' ';
        }
    }
    mTable += '\n'
}

console.log(mTable);