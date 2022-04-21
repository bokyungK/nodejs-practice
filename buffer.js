const fs = require('fs').promises;

// 버퍼 사용해보기
const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

// 버퍼를 하나로 합치기
const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
console.log(Buffer.concat(array).toString());

// 빈 버퍼 만들기
console.log(Buffer.alloc(5)); // <Buffer 00 00 00 00 00>

// 버퍼 방식으로 한 번에 파일을 읽어온 경우
fs.readFile('./readfile.txt') // 이 부분이 버퍼 방식으로 파일을 읽어온 것!
    .then((data) => {
        
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    })