// ① 다음 코드의 실행 결과는?
    // console.log(typeof undeclaredVar);
// a > undefined

// ② var, let, const 중 재선언이 가능한 것은?
    // var a = 1; 여기에 또 a를 선언할 수 있는가?
// a > var라서 중복 변수명 가능함

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
// a > 100

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

// ⑬ new 키워드를 빼먹고 생성자 함수를 호출하면 어떤 일이 발생할까?
    // function Cat(name) {
    //      this.name = name;
    // }
    // const cat1 = Cat("야옹이");
    // console.log(cat1.name); // ??
// a > 야옹이 그래도 잘 들어갈거같은디??

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
// a > 2
