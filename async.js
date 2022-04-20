// const fs = require('fs');

// 동기식으로 순서 테스트 -> 순서가 보장됨
// let data = fs.readFileSync('./readfile.txt');
// console.log('1번', data.toString());
// data = fs.readFileSync('./readfile.txt');
// console.log('2번', data.toString());
// data = fs.readFileSync('./readfile.txt');
// console.log('3번', data.toString());
// data = fs.readFileSync('./readfile.txt');
// console.log('4번', data.toString());

// 비동기식으로 순서 테스트 -> 순서가 보장되지 않음
// fs.readFile('./readfile.txt', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log('1', data.toString());
// })
// fs.readFile('./readfile.txt', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log('2', data.toString());
// })
// fs.readFile('./readfile.txt', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log('3', data.toString());
// })
// fs.readFile('./readfile.txt', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log('4', data.toString());
// })

// -----------------------------------------------------

// 비동기식으로 순서를 보장하기1-1 (콜백 사용)
// fs.readFile('./readFile.txt', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log('1번', data.toString());
//     fs.readFile('./readFile.txt', (err, data) => {
//         if (err) {
//             throw err;
//         }
//         console.log('2번', data.toString());
//         fs.readFile('./readFile.txt', (err, data) => {
//             if (err) {
//                 throw err;
//             }
//             console.log('3번', data.toString());
//             fs.readFile('./readFile.txt', (err, data) => {
//                 if (err) {
//                     throw err;
//                 }
//                 console.log('4번', data.toString());
//             })
//         })
//     })
// })

// 비동기식으로 순서를 보장하기1-2 (프로미스 사용)
const fs = require('fs').promises;

// fs.readFile('./readFile.txt')
//     .then((data) => {
//         console.log('1번', data.toString());
//         return fs.readFile('./readFile.txt');
//     })
//     .then((data) => {
//         console.log('2번', data.toString());
//         return fs.readFile('./readFile.txt');
//     })
//     .then((data) => {
//         console.log('3번', data.toString());
//         return fs.readFile('./readFile.txt');
//     })
//     .then((data) => {
//         console.log('4번', data.toString());
//         return fs.readFile('./readFile.txt');
//     })
//     .catch((err) => {
//         throw err;
//     });


// 비동기식으로 순서를 보장하기1-3 (async/await 사용)
async function main() {
    let data = await fs.readFile('./readfile.txt')
    console.log('1번', data.toString());
    data = await fs.readFile('./readfile.txt')
    console.log('2번', data.toString());
    data = await fs.readFile('./readfile.txt')
    console.log('3번', data.toString());
    data = await fs.readFile('./readfile.txt')
    console.log('4번', data.toString());
}
main();
