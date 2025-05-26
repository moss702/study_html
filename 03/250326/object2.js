// 
// const obj = {}; 아래것과 동일의미
const obj = new Object();
obj.a =10;
console.log(obj);

const arr = new Array(); //길이가 0인 빈 배열

// 자바
// List<Student> students;
// students.get(0).getNo();

// 자바 스크립트식으로는? 
const students = [{no:1}, {no:2}];
console.log(students[1].no);
// JSON:Java script Object Notation(배열과 객체를 섞어서 쓴다)

// 배열안에 꼭 같은 형식이 올 필요도 없음. 걍 문법만 맞으면 됨.
// 값으로 오는게 다른 타입이 될수도, 배열이 될수도 있다.
[
    {
        className : '우리반'
    },
    {
        no : 1,
        name : '새똥이',
        score : {
            kor: 90,
            eng: 80,
        }
    },
    {
        no : 2,
        name : '개똥이'
    }
]

//객체 리터럴의 단점
[
    {mo:1},
    {no:2, name:'개똥이'}
] //생성자가 없음 == 필드에 규칙이 없음..

