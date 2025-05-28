const arr = [1,2,3,4];
const obj = { a: 1, b : 2 };
const map = new Map();
map.set("a", 1); //맵을 통해 인덱스 지정을 해주게되면
map.set("b", 2);   //[Map Iterator] { 'a', 'b' } 순환가능한 대상이 된다.
console.log(map);
console.log(map.get("a"));
console.log(map.has("a")); //contains key
console.log(map.has("c")); //contains key

const keys = map.keys(); 
console.log(keys); 

for(let i of keys){
    console.log(i);
}
for(let i of map.values()){

}
//Map의 내부 인터페이스 Entry
for(let i of map.entries()) {
    console.log(i); 
    // [ 'a', 1 ] 
    // [ 'b', 2 ]
    // 키값 한쌍으로 idx 0 : key, 1 : values
    // 오브젝트 타입이지만 배열취급. 배열처럼 접근 가능.
    // 관리가 번거로워 map보다 list를 쓴다.
}
// java : iterable 인터페이스로 배열, 리스트, Set
// 순환 가능한 리스트, 배열 등에는 for of 가능.
for (let i of arr){
    console.log(i);
}

// {}객체에는 순서가 없음. 인덱스도 없음. 이름 a,b가 있을뿐임
// 그래서 for of 사용불가
// for (let i of obj){
//     console.log(i);
// }
