// number, string, boolean
// function, object, undefined


// 함수를 반환하는 함수
function f(c) {
    let l = 10;
    // function inner(){ //함수 내부에 함수 선언
    //     return l + c
    // }
    // let inner = function(){
    //     return l + c;
    // }
    return function(){ //[Function (anonymous)]
        return l + c;
    }
    // return inner; 
}

const ret = f(10);
console.log(ret); // [Function: inner(함수의 이름)]
const result = ret();
console.log(result); // 20

console.log(f(20)()); //함수는 호출이 가능함. 위에 두줄로 쓴걸 이렇게 할수도있다.

//----------------------
function f3(c) {
    c();
}
f3(function (){
    console.log("callback");
});
//-------------------------
const arr = [3,41,5,4,2,1];
arr.sort(function(a,b){
    return b - a;
})
console.log(arr);
