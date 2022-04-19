const fs = require('fs').promises;

fs.writeFile('./writeme.txt',
 '프로미스 체이닝으로 텍스트 파일을 생성하고 읽어옵니다.')
    .then (() => {
        return fs.readFile('./writeme.txt');
    })
    .then ((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });