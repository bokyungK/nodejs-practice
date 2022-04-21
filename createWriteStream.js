const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme.txt')
writeStream.on('finish', () => { // finish는 이벤트 리스너이다. 데이터를 처리하고 end가 완료되면 실행된다.
    console.log('파일 작성이 완료되었습니다.');
})

writeStream.write('첫 번째 데이터를 저장합니다.\n');
writeStream.write('두 번째 데이터를 저장합니다.\n');
writeStream.write('세 번째 데이터를 저장합니다.\n');

writeStream.end();