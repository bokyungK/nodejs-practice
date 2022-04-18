const value = require('./export.js');
const odd = value.odd;
const even = value.even;

for (i=0; i<10; i++) {
    if (i%2 === 0) {
        console.log(odd);
    } else {
        console.log(even);
    }
}
