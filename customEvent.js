const EventEmitter = require('events'); // 이벤트 모듈에서 생성자를 만든다.

const myEvent = new EventEmitter(); // 나만의 커스텀 이벤트를 생성
myEvent.addListener('event1', () => {
    console.log('이벤트 1');
});

myEvent.on('event2', () => { // eventListener === on
    console.log('이벤트 2');
});

myEvent.on('event2', () => { // 같은 이벤트에 콜백 추가
    console.log('이벤트 2 추가');
});

myEvent.once('event3', () => { // 한 번만 실행되고 다음에 안불림
    console.log('이벤트 3');
});

myEvent.emit('event1');
myEvent.emit('event2');
myEvent.emit('event3');
myEvent.emit('event3'); // 실행되지 않음


myEvent.on('event4', () => {
    console.log('이벤트 4');
});
myEvent.removeAllListeners('event4'); // event4에 등록된 콜백이 모두 지워짐
myEvent.emit('event4'); // 삭제해서 실행되지 않음

const listener = () => {
    console.log('이벤트 5');
};

myEvent.on('event5', listener);
myEvent.removeListener('event5', listener); // removeListener(all 빠진 버전) 사용하면 특정 콜백 함수만 지울 수 있음
myEvent.emit('event5'); // 하나 있던 콜백함수 지워서 실행 안 됨

console.log(myEvent.listenerCount('event2')); // 해당하는 이벤트에 콜백함수 몇 개 등록되어 있는지 카운트