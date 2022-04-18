const string ='abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
};


console.log('평범한 로그입니다.', '쉼표로 구분해서 여러 값을 출력할 수 있습니다.');
console.log(string, boolean, number);
console.error('에러 메시지는 console.error에 담아주세요');
console.log('---');

console.table([{name: '김보경', birth: 1994}, {name: '김현진', birth: 1991}]);
console.log('---');

console.dir(obj, {colors: false, depth: 2});
console.dir(obj, {colors: true, depth: 1});
console.log('---');

console.time('시간 측정');
for (let i=0; i<100000; i++) {}
console.timeEnd('시간 측정');
console.log('---');

function b() {
    console.trace('에러 위치 추적')
}
function a() {
    b();
}
a();