//생성자 함수
function Student(no, name = '소똥이', score = 100){
    //함수에 기본값 지정 가능. 안쓰면 기본저장.
    this.no = no;
    this.name = name; //파라미터로 받은 name을 this.name에 저장하고 추후에 쓰겠다.
    this.score = score;
}
// this : 미래에 생성될 객체의 주소값

const student = new Student(1, "새똥이", 90);

console.log(student);
console.log(student.name);

const students = [];
students.push(student);
students.push(new Student(2,'개똥이',80));
students.push(new Student(3));
students.push(new Student());

console.log(students);



