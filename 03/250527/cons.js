// -------------- 프로토타입 (교재 378p)
// 생성자 함수의 단점?
new Student();

// Student의 프로퍼티
// 학번 / 이름 / 국어 / 영어 / 수학 / *총점 / *평균  *=함수
// 학생 100명 = 프로퍼티 700개? 
// 프로토타입을 통한 분리! ((공통함수인 프로퍼티는 별도 관리해서 필드를 줄일수있다.))
// 프로토타입? 함수를 통해 생성된 객체(new)의 공용공간
function Student(no, name, kor, eng, mat) {
    this.no = no;
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.mat = mat;
}
Student.prototype.total = function () {
    return this.kor + this.eng + this.mat;
}
Student.prototype.avg = function () {
    return this.total() / 3;
}

// 공통함수를 밖으로 빼고, this 부분을 프로토타입으로 수정

const s = new Student(1, "새똥이", 80, 90, 100);
console.log(s.total());
console.log(s.avg());

//--------------------------
Student.prototype.test = 10;
// console.log(s.test());

console.log(new Student().test);

Student.test = 20;
console.log(Student.test);

// 클래스 내부 함수 : 일급객체
Student.fn = function() {
    return "하이"
}
console.log(Student.fn());

//---------------------------

const arr = [1,2,3,4];
// arr.size(); // 하지만 js에 없는 함수라서 undefined 출력
Array.prototype.size = function () {
    return this.length;
} // 그럼 함수 하나 만들면 되지?
arr.size(); // 그럼 이제 사용할 수 있다. 단, 함수 선언이 우선되어야 한다.
// remove() 등, java에는 있었지만 js에는 없는 함수들을 만들수있다.
// java : extents를 통한 확장
// js : prototype을 통한 확장
//      프로토타입의 전제조건 > 생성자 함수 존재.

//---------------------------

const num = 10;
console.log(num.toFixed());
