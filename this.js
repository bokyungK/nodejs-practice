// this
console.log(this === exports); // exports === module.exports === {}

// function's this
function testThis() {
    console.log(this === global);
}
testThis();