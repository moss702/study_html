// var num = 10;
str = "새똥이";
// 지역의 위치에서 var, let이 없어도 선언 가능.
// 키워드 생략시 전역의 위치에 선언.
function f() {
    // console.log(num); //hoist) 지역변수 내에 num이 있어서 함수의 존재는 알지만(var=num;) 값은 모름. >> undefined
    num = 20;
    console.log(num); 
    //가장 가까운 범위 지역변수에서 num 서치 > 없으면 전역변수 서치
}
f();
console.log(num);
console.log(str);

//var키워드, 선언적 함수는 hoisting의 대상   :: 함수레벨 scope
(function() {
    // 여기서 for문 실행하면 이건 함수내의 선언이라서 i값 남지않음.
    // 여기서는 i 호출 가능
}) //여기서부터는 함수밖이라서 i 호출 불가

// for(var i = 0; i < 10; i++) {
// }
// console.log(i);  // 10 : i값이 그대로 존재한다...

// if(true){
//     let test = 10;
// }
// console.log(test);

var str = "abcd";
var str = "가나다";
let str = "abcd";
let str2 = "가나다";
var str = "가나다";

