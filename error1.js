setInterval(() => {
    console.log('시작');
    try {
        throw new Error('서버를 고장내주마!');
    } catch (err) { // 에러를 throw한 것을 catch에서 받는다
        console.error(err); // 에러가 아닌 것처럼 처리해줌 => try catch를 안쓰면 노드는 멈춰버림. 에러를 표시해주면서 정상 동작 시켜버림!
    }
}, 1000);