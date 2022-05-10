const http = require('http');

// 서버 생성
const server = http.createServer((req, res) => { 
    // 서버에 요청이 들어오면 실행되는 함수

    // 응답하기 (이것도 스트림이다.)
    res.write('<h1>Hello Node!</h1>');
    res.write('<p>Hello server</p>');
    res.end('<p>Hello ZeroCho</p>');
})

    .listen(8080)  // 서버도 프로그램이기 때문에 프로세스로 올려줘야한다. 8080포트에 프로세스를 띄운다.
// listen을 하는 경우에는 서버를 실행하면 터미널 하나를 잡고 있어서 다른 명령문을 사용할 수 없다.

server.on('listening', () => { // .listen의 콜백 함수를 이벤트로 따로 떼어내서 작성해준것임
    console.log('8080번 포트에서 서버 대기 중입니다.');
});

server.on('error', (error) => {
    console.error(error);
});