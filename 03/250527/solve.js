// ① 다음 코드의 실행 결과는?
    // console.log(typeof undeclaredVar);
// a > undefined

// ② var, let, const 중 재선언이 가능한 것은?
    // var a = 1; 여기에 또 a를 선언할 수 있는가?
// a > var라서 중복 변수명 가능함
                // 선언과 할당을 구분할것
                // var : 재선언 재할당 가능
                // let : 재할당 가능
                // const : 불가

// ③ 다음 중 함수 선언식(선언적 함수)은?
    // 1. function foo() {},
    // 2. const bar = function() {},
    // 3. let x = (a, b) => a + b;,
    // 4. function = hello() {}
// a > 2번

// ④ 함수의 리턴값이 없는 경우 console.log(함수())의 출력 결과는?
//     function test() {}
//     console.log(test());
// a > [function : test]...? 
    // 답 : undefined

// ⑤ 아래 코드를 실행하면 어떤 값이 출력될까?
//     function add(x, y) {
//         return x + y;
//     }
//     console.log(add("3", 5));
// a > 35

// ⑥ 익명함수를 변수에 담았을 때, 변수명으로 호출할 수 있는가?
    // const hello = function() {
    //      return "Hi!";
    // };
// a > console.log(hello);

// ⑦ 다음 중 잘못된 객체 선언은?
    // { name: "철수", age: 20 },
    // { let: "reserved" },
    // { "full name": "홍길동" },
    // { 1name: "숫자시작" },
// a > 4번 . 숫자로 시작해서..?
// 답 : 4번 쌍따옴표로 감싼 {"1name" : "숫자시작"}은 가능하다
//      근데 2번도 하지마라

// ⑧ 다음 코드의 결과를 예측하시오. (파라미터 기본값)
    // function greet(name = "손님") {
    // return "안녕하세요 " + name + "님!";
    // }
    // console.log(greet());
// a > 안녕하세요 손님님!

// ⑨ 객체의 값을 함수 안에서 바꾸면 원래 객체도 바뀔까?
    // let obj = { score: 50 };
    // function update(o) {
    //      o.score = 100;
    // }
    // update(obj);
    // console.log(obj.score); // ?
// a > 객체는 안바뀌고
//     배열이 참조하는건 주소값.. 주소값안의 값이 바뀌어도 주소값은 동일유지..


// ⑩ 다음 코드를 보고 result에 어떤 값이 들어갈지 예측하시오.
    // function calc(x, y) {
    //     return;
    //     x + y;
    // }
    // let result = calc(5, 10);
// a > undefined 리턴을 안해줬는데 값이 들어가나..?

// ⑪ 다음 코드에서 student.name의 값은 무엇일까?
    // function Student(n) {
    //      this.name = n;
    // }
    // const student = new Student("민지");
// a > 민지

// ⑫ 생성자 함수와 객체 리터럴 방식의 차이를 설명하시오. (서술형)
// 생성자 함수 
// 객체 리터럴
            // 같지만 호출 강제성의 차이가있다
// 문법설탕

// ⑬ new 키워드를 빼먹고 생성자 함수를 호출하면 어떤 일이 발생할까?
    // function Cat(name) {
    //      this.name = name;
    // }
    // const cat1 = Cat("야옹이");
    // console.log(cat1.name); // ??
// 오류발생 존재하지 않는 값을 찾아서

// ⑭ 다음 코드의 실행 결과는?
    // var a = 1;
    // function test() {
    //   console.log(a);
    //   var a = 2;
    // }
    // test();
// a > 1

// ⑮ 다음 중 참조에 의한 할당(같은 주소를 가리킴)은?
    // let a = {}; let b = a;,
    // let a = 1; let b = a;,
    // const a = [1, 2]; const b = [1, 2];,
    // let obj = {}; obj = null;
// a > 1  , (b: 값에의한 할당.)

// ⑯ 아래 코드는 실행될까? 안된다면 이유는?,
// greet();

// const greet = function() {
//   console.log("Hello");
// };
// --- const 함수 안됨

// ⑰ 다음 중 '함수 표현식'에 해당하는 것을 모두 고르시오.,
// function test() {},
// const test = function() {},
// let test = () => {},
// function = test() {},
// --- 2, 3

// ⑱ 아래 코드에서 name을 출력하려면 어떤 접근법을 써야 할까?,
// const user = {
//   name: "영희",
//   age: 22
// };
// --- user.name , user["name"]

// ⑲ 아래 코드를 실행하면 무엇이 출력될까?,
// const a = {
//   value: 10
// };

// const b = a;
// b.value = 99;

// console.log(a.value);

// ---99. 주소복사해서.

// ⑳ 다음 중 올바른 생성자 함수 사용 예시는?,
// function Dog(name) { this.name = name; } let d = Dog("초코");,
// function Dog(name) { this.name = name; } let d = new Dog("초코");,
// const Dog = function(name) { name: name }; let d = new Dog("초코");,
// let Dog = () => { this.name = "초코" }; let d = new Dog();,

// --- 2. 생성자함수는 익명,람다는 쓰면 안됨. 선언식함수로 쓸것.