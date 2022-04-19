const fs = require('fs').promises;

fs.writeFile('./writeme.txt', '새롭게 파일과 글이 생성됩니다.')
    .then ((data) => {

    })
    .catch((err) => {
        throw err;
    });