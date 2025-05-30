function factorial(n) {
    let result = 1;
    if(n == 0) {
        return result;
    } else {
        return result = n * factorial(n - 1);
    }
}
console.log(factorial(5));

// url 
// 프로토콜://도메인:포트/경로/파일?쿼리스트링#앵커
// http://localhost:5500/03/250526/test.html?color=#000000&name=새똥이
// http://localhost:5500/03/250526/test.html?color=%23000000

let url = 'http://localhost:5500/03/250526/test.html?color=#000000&name=새똥이';
console.log(url);
console.log(encodeURI(url));
console.log(encodeURIComponent(url));

console.log(decodeURIComponent(encodeURIComponent(url)));

// parseInt(문자열) : 숫자 >> 정수만
// parseFloat(문자열) : 숫자 >> 실수 포함
let str = "123.456가나다";
console.log(parseInt(str)); //123
console.log(parseFloat(str)); //123.456

str = "ff";
console.log(parseInt(str, 16)); //255

eval()

let s = String.fromCharCode(65,66);
console.log(s);

console.log(s.charCodeAt(1)); //s의 1번인덱스

