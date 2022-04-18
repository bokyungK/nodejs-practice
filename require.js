const {odd, even} = require('./export.js');

for (i=0; i<10; i++) {
    if (i%2 === 0) {
        console.log(odd);
    } else {
        console.log(even);
    }
}
