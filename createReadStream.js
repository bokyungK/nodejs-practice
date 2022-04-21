const fs = require('fs');
const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 }); // 스트림 방식으로 데이터를 쪼개서 처리

const data = [];
readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data:', chunk, chunk.length);
    // 조각을 냈는데 왜 한 번에 결과가 나옴? -> createReadStream이 한 번에 읽는 양은 64kb임.
    // 그런데 우리가 작성한 글자는 162byte라서 너무 작은 양이라 한방에 읽어버린 것!
    // 한 번에 읽는 양을 highWaterMark로 조절할 수 있음!
});
readStream.on('end', () => {
    console.log('end:', Buffer.concat(data).toString());
})
readStream.on('error', (err) => {
    console.log('error:', err);
})
