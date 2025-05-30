console.log(max(5,10));


//function
//1.선언적 함수 - function키워드 + 함수의 이름
function max(a, b){
    return a > b ? a : b;
}
//2.익명 함수 - 함수를 min이라는 변수에 넣는것
var min = function(a, b) {
    return a < b ? a : b;
}


console.log(max (10, 5));
console.log(min (10, 5));

//선언적 함수로 두 수의 곱을 반환하는 함수를 정의 mul
function mul(a,b){
    return a * b;
}

//익명 함수로 두 수의 차이를 반환하는 함수를 정의 sub *반드시 양수로 반환
var sub = function(a, b){
    if (a - b < 0) {
        return (a - b) * -1;
    }
    //  return a > b ? a - b : b - a;
    return a - b;
}

console.log(sub (-5,10));


var add = function(a , b){
    if(!(typeof a == "number" && typeof b == "number")) return NaN;
    return a + b;
}
// //type script
// var add2:Number = function(a:Number, b:Number){
//     return a + b;
// }

//hoist : var로 선언한 변수, 선언적 함수는 끌어올려짐
// var로 선언한 변수는 중복선언 가능
console.log(num); //undefined
var num = 10;
var num = 20;
console.log(num);

// 함수 내에서 선언한 변수(지역변수)
// 익명함수 === 함수리터럴
// 10 : 넘버
// "abc" : 문자열
// false : 불린
// {} : 객체 object literal
// function() {} : 펑션 리터럴
// [] : array 리터럴

console.log("abcdefg".substring(3,5));
console.log([10, 20, 30][1]);
console.log({a:10, b:20}.a);
var obj = {a:10, b:20};

// IIFE 즉시실행함수
(function(a) {console.log('파라미터의 값 : ' + a)}) (30);

//JS에서 function(함수)은 type이다. 

obj = {no:1, name:"새똥이", score:80, getScore : function() {
    return this.score;
}};

console.log(obj);
console.log(obj.score);
console.log(obj.getScore());

// 값 3개 중 최대값 구하기
function max2(a, b, c) {
    // return (a > b ? a : b) < c ? c : (a > b ? a : b);
    
    if (a > b && a > c) {  //a가 최대값
        return a;
    } else {
        if ( b > c) {  //b가 최대값
           return b;
        } else { //c가 최대값
           return c;
        }
    }  
}

function max3(a, b, c) { //아까 만든 max 함수 사용
    return max(max(a,b),c); //여기서의 a,b,c는 매개변수
}
console.log(max3(15,5,20)); //여기서의 15,5,20은 아규먼트(인수)

function max4(a,b,c){
    console.log(arguments);
}
max4(10,20,30);
