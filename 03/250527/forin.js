// for .. in
//      객체 탐색의 필수품
// js의 obj는 이름을 통한 접근, java의 map과 비슷
const str = "f";
const obj = {a:10, b:20, c:30};
obj.d = 40; 
obj["e"] = 50;
obj[str] = 60;
console.log(obj.toString());

for(let i in obj){
    //let i ? 객체의 프로퍼티 이름
    // obj["a"] > obj["b"] . . .  서치
    console.log(i, obj[i]);
}
//----------------------------------------
// 클래스 문법. *프라이빗 잘 안함. 불편해서..
class Addr {
    //JS-클래스 문법에서 프라이빗 필드 만들기 : 변수명 앞에 #
    #no;

    constructor(no, name, desc) {
        this.#no = no;
        this.name = name;
        this.desc = desc;
    }
    print(){ //프로토타입으로 만들엇기 때문에 addr 출력시 포함되지않음.
        console.log(this.no, this.name, this.desc);
        return "반환 테스트"
    }

    //getter setter
    get no() {
        return this.#no;
    }
    set no(no){
        this.#no = no;
    }

}
const addr = new Addr(1, "새똥이", "부천시");
// 반드시 new를 통해서만 정의 가능.
console.log(addr);
console.log(addr.print());

// 게터 세터 사용. 자바와 다르게 필드식 호출
addr.no = 10;
// console.log(addr.no());

console.log(addr);

for(let i in addr) {
    console.log(i);
    // 프라이빗하면 전부 숨겨져버린다..
}

//--------------------------------------
// 생성자 함수의 정보 은닉(프라이빗)
function Card(kind, number){
    let k = kind;
    this.getKind = function(){
        return this.k;
    }
    this.setKind = function(kind){
        this.k = kind;
    }
}

