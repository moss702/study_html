//map
const doubled = [1,2,3].map(v => v * 2);
console.log(doubled);

//filter
const evens = [1,2,3,4].filter(v => v % 2 === 0);
console.log(evens);

//find -- 찾아서 만나는 첫번째 녀석만 리턴
const firstEven = [1,3,4,6].find(v => v % 2 === 0);
console.log(firstEven);

//reduce(fn, 초기값) -- 한차원 줄이기
const sum = [1,2,3,4].reduce((prev, cur) => prev + cur, 0)
console.log(sum);

//some, every >> boolean
console.log([1,2,3].some(v => v % 2 === 0)); //배열 요소의 일부가 짝수인지
console.log([1,2,3].every(v => v % 2 === 0)); //배열 요소의 전체가 짝수인지

//includes
console.log([1,2,3].includes(1));
console.log([1,2,3].includes(4));

const users = [
    {name: '새똥이', age:14},
    {name: '개똥이', age:24},
    {name: '소똥이', age:34},
];
//20세 이상인 사람의 이름 추출 ['개똥이', '소똥이']
// users.filter(v => v.age >= 20);
// console.log(users.name);

console.log((users.filter(v => v.age >= 20)));  //[ { name: '개똥이', age: 24 }, { name: '소똥이', age: 34 } ]
console.log((users.filter(v => v.age >= 20).map(v => v.name))); //[ '개똥이', '소똥이' ]
//맵을 통해서 타입변경. v(배열의 객체) > 문자열로 변경


// 이 코드는 뭐가 문제일까?
const arr = [1, 2, 3];
const result = arr.forEach(v => v * 2);
console.log(result);

console.log(arr.forEach(v => v * 2)); 
// 얘부터가 undefined :: foreach는 반환하지 않음.
// map 사용하면 결과리턴해준다.
// const result = arr.forEach(v => arr2.push(v * 2))); 

//이 배열을 가지고 짝수만 골라서 제곱으로 이루어진 배열을 반환
const numbers = [1,2,3,4,5,6,7];
const numbers2 = (numbers.filter(v => v % 2 === 0).map(v => v * v));
// .map(v => v * v) 체이닝을 해야 배열의 덧셈이 간편하다
// console.log(numbers2 * numbers2); 이렇게는 안됨.


//cart에 들은 상품들의 총 합계 계산 reduce
const cart = [
    {item: "감자", qty: 3, price: 1000},
    {item: "고구마", qty: 2, price: 1500},
    {item: "양파", qty: 5, price: 500}
]

const ret = cart.reduce((prev, cur) => prev + cur.qty * cur.price, 0);
const ret2 = cart.reduce((prev, cur) => {
    console.log(prev, cur);
    return prev + cur.qty * cur.price
}, 0);
console.log(ret2);

//특정 조건의 첫 요소 찾기 (find)
const books = [
    {title: "JavaScript 기초", pages: 120},
    {title: "ES6 완벽 가이드", pages: 350},
    {title: "CSS 디자인", pages: 200},
    {title: "HTML5", pages: 400},
]
//300페이지가 넘는 책의 이름조회  //여러개 쓰고싶으면 필터. + map
console.log(
books.find(v => v.pages >= 300).title //이 결과는 객체타입
// (books.find(v => v.pages > 300).map(v => v.title)) //map은 배열대상. 객체라서 안써도됨
);

//가장 고가의 상품 이름 조회(reduce)
const products = [
    {name: "노트북", price: 1200000},
    {name: "키보드", price: 150000},
    {name: "마우스", price: 50000},
    {name: "모니터", price: 300000},
]
console.log(
products.reduce((pre,cur) => {
    return pre < cur.price ? cur : pre
},0).name
);

for (let i = 0; i < 10; i++) {

}
const obj = {a:1, b:2};
for(let i in obj) {
    console.log(obj[i]); //여기서 i = index
}
const arr3 = [10, 20, 30];
for(let i of arr3) {
    console.log(i); //여기서 i는 값
}
for(let i in arr3) {
    console.log(i, arr3[i]); //여기서 i는 인덱스
}

// date 타입
const now = new Date();
console.log(now); //2025-05-27T07:04:38.234Z
    //node 덕분에 이렇게 나옴
console.log(now.toString()); //Tue May 27 2025 16:04:38 GMT+0900 (대한민국 표준시)

console.log(now.getFullYear());
console.log(now.getMonth()+1); //1월이 0이라 +1 해줘야한다.
console.log(now.getDate());

