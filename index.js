// 자바스크립트 함수 실행 예제

// 기본 함수 정의
function greet(name) {
    return `안녕하세요, ${name}님!`;
}

// 화살표 함수 예제
const add = (a, b) => a + b;

// 콜백 함수 예제
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

// 비동기 함수 예제
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('데이터를 성공적으로 가져왔습니다!');
        }, 1000);
    });
}

// 함수 실행 및 결과 출력
console.log('=== 자바스크립트 함수 실행 예제 ===\n');

console.log('1. 기본 함수:');
console.log(greet('홍길동'));
console.log();

console.log('2. 화살표 함수:');
console.log(`5 + 3 = ${add(5, 3)}`);
console.log();

console.log('3. 배열 메서드와 콜백 함수:');
console.log('원본 배열:', numbers);
console.log('2배된 배열:', doubled);
console.log();

console.log('4. 비동기 함수:');
fetchData().then(result => {
    console.log(result);
    console.log('\n=== 모든 예제 실행 완료 ===');
}).catch(error => {
    console.error('오류 발생:', error);
});

// 즉시 실행 함수 (IIFE) 예제
(function() {
    console.log('\n5. 즉시 실행 함수:');
    console.log('이 함수는 정의와 동시에 실행됩니다!');
})();
