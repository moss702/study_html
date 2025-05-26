let obj = {
    name : '홍길동',
    age : 20,
    printOut : function(){

    }
};

console.log(obj); //{ name: '홍길동', age: 20, printOut: [Function: printOut] }
console.log(obj.name); //홍길동

//객체 관련 연산자
//객체의 프로퍼티 추가
obj.tel = "010-1111-2222";
console.log(obj);

//객체의 프로퍼티 제거
delete obj.age;
console.log(obj);

//객체 내의 프로퍼티 확인(존재여부) >> boolean 리턴
console.log("tel" in obj); //true
console.log("age" in obj); //false

//spread operator(전개 연산) 
const num = 10;
const obj1 = {"a":1, "b":2}
const str = "가나다라";
const obj2 = {...obj1, c:3};   //str:str == str 식별자 생략
console.log(obj2);

// age.name == age["a"]
// age.name : 기본적인 객체의 프로퍼티에 접근
// age["a"] : 객체를 배열처럼 접근하기(연관배열)

// distribute operator(분해 연산)
function fn(p1, p2, ...a){
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum += a[i];
    }
    return sum;
}
fn("값1", "값2", 10, 20, 30);

console.log(fn("값1", "값2", 10, 20, 30));


