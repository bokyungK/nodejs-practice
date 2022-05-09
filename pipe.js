const fs = require('fs');
const zlib = require('zlib');

// 파이핑
const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 });
const writeStream = fs.createWriteStream('./writeme3.txt');
readStream.pipe(writeStream); // 서로 파이프로 연결했기 때문에, readStream이 읽어온 16byte 스트림을 writeStream이 16byte씩 작성한다.
// 어떻게 보면 파일 복사라고 볼 수 있다.

// 파일을 압축해서 사용하기
// const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 });
// const zlibStream = zlib.createGzip();
// const writeStream = fs.createWriteStream('./writeme4.txt.gz');
// readStream.pipe(zlibStream).pipe(writeStream);  // 다양한 파이프끼리 연결할 수 있다.(파이프를 지원하는 것 끼리만 가능)
