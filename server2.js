const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
    try {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        const data = await fs.readFile('./server2.html');
        res.end(data);
    } catch (error) {
        console.error(err); // 에러 기록
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }); // 텍스트 명시
        res.end(err.message); // 에러 메시지 전송
    }
})
    .listen(8080);
server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기중입니다.');
});
server.on('error', (error) => {
    console.error(error);
});