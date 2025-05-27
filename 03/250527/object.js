// Number
const num1 = 10; //10
const num2 = new Number(20); //[Number: 20]
// int와 integer의 차이와 유사.

console.log(num1 + num2);
console.log(typeof num1, typeof num2);
// num1 : number / num2 : object
// 덧셈도 연산도 가능하기 때문에 굳이 new 연산자로 선언하지 않는다.

console.log(num1.toFixed(3));
console.log(num2.toFixed(2));

//--------------------------------
// String  * 이것도 굳이 new 연산자로 선언하지 않는다.
const str1 = "문자열"; //문자열
const str2 = new String("문자열"); //[String: '문자열']

console.log(str1, str2);
console.log(str1 + str2);

console.log(str1.length);
//문자열은 배열의 특징을 갖고 있다. 인덱스가 존재함
//(Js는 대부분 배열 접근하듯이 사용 가능하긴 함)
for(let i = 0; i < str1.length; i++){
    console.log(str1[i], str1.charAt(i));
}

str1.includes("a")

const str3 = "abcd1234abcd";
console.log(str3.substring(3,5));
console.log(str3.substr(3,5)); //deplecate됐지만 써도됨
console.log(str3.slice(3,5)); //substring과 동일결과. 더 짧아서 이걸 쓴다.

//--------------------------------
// 정규표현식 객체 만드는 법
const reg1 = new RegExp("[A-Z]"); //생성자 호출로 선언
const reg2 = /[A-Z]/; // regexp literal 정규식 리터럴

const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(/[A-Z]/.test("abcdABCD"));
console.log(/[A-Z]/.test("abcd1234"));

console.log("abcdefabcdef".replace('a', "1")); //가장 먼저 만난 a만 바꾼다.
console.log("abcdefabcdef".replace(/a/g, "1")); //g(global:전역) 모든 a를 바꾼다.
console.log("abcdefabcdefABC".replace(/a/gi, "1")); //g(global:전역)+i(대소문자구분x)
//=====================================


