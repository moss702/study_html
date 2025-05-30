function add() {
    let n = 0;
    return function(){
        return ++n;
    }
}

//closer : 함수 호출완료 이후에도 지역변수가 잔존하는 현상
// 최소선행조건 : 함수를 리턴(그래야 함수상태 유지)
const increase = add(); //increase의 type은 function
console.log(increase());
console.log(increase());
console.log(increase());

const increase2 = add(); //add()를 다시 호출했다 == 다시 n을 0으로 초기화했다.
console.log(increase2());
console.log(increase2());
console.log(increase2());

console.log(increase()); //4. 얘는 계속 유지되어 있다.
