// let str;
// console.log(typeof str);
// console.log(str);

const num = 10;
// num = 20; //상수의 값 변경은 불가
console.log(num);

const obj = {a:10, b:20};
obj.c = 30; //내부 프로퍼티의 변화는 ㄱㅊ
console.log(obj);

const students = [];
const student1 = {no:1, name:"새똥이", score:80};
const student2 = {no:2, name:"개똥이", score:70};
const student3 = {no:3, name:"소똥이", score:90};
students.push(student1);
students.push(student2);
students.push(student3);

console.log(students);
students.splice(1, 1); //1번 인덱스에서부터 1개 삭제

console.log(students);

{
    const v = 10;
    console.log(v);
}
{
    const v = 20;
    console.log(v);
}