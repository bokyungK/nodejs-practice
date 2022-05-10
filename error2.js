const fs = require('fs');

setInterval(() => {
    fs.unlink('./abcdefg.js', (err) => {
        if (err) { // fs로 에러를 처리하는 구간은 try catch를 사용하지 않아도 됨. 에러가 발생해도 프로세스가 멈추지 않음
            console.error(err); // 로그에만 표시 후 에러 해결하면 됨
        }
    });
}, 1000);