function max(){ //아규먼츠를 사용하게 되면 인자가 필요없다.
    console.log(arguments);
    // arguments : 객체. 배열처럼 사용되는 객체(유사배열)
    var ret = arguments[0];
    for (var i = 0; i < arguments.length; i++){
        if(ret < arguments[i]) {
            ret = arguments[i];
        }
    }
    return ret;
}
console.log(max(30, 40, 50)); //함수의 매개변수가 없으니 아규먼트의 개수도 상관없음
//------------------
function test(a, b) {
    console.log(a, b);
}
test(); //선언은 했지만 정의는 안됨.
//------------------
// 절대값 구하는 함수
var abs = function (a) {
    return a > 0 ? a : -a;
}
abs = (a) => {
    return a > 0 ? a : -a;
}
abs = a => {
    return a > 0 ? a : -a;
}
abs = a => a > 0 ? a : -a;
//------------------
//배열 생성
var arr = [3, 2, 1, 5, 4];
arr.sort((a, b) => b - a);
console.log(arr);

arr.forEach(a => console.log(`내부의 값은 ${a}`));
arr.filter(a => a % 2 == 1).map(a => "값은 " + a).forEach(console.log);
//------------------


