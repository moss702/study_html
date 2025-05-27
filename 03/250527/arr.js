let arr = [10,20,30,40,50,60,70];
console.log(arr.length);
console.log(arr[1]);
console.log(arr.slice(2,4));
console.log(arr.join("-"));   //10-20-30-40-50-60-70
console.log(arr.concat(["가","나","다"])); //기존 배열의 뒤에 문자 연결

//배열의 값 추가
arr.push(1);
console.log(arr);
arr.unshift(10); 
console.log(arr);
arr.pop();
arr.pop();
arr.pop();
console.log(arr);
arr.shift();
arr.shift();
arr.shift();
console.log(arr);

arr.splice(1,0,10) //1번 인덱스에, 하나도 지우지않고, 10 값 추가
console.log(arr); // 30, 10, 40, 50 

arr.splice(2,1); // 30, 10, 50
console.log(arr);

arr.splice(0, 1, 20); //0번 인덱스에, 1개 지우고, 20 값 추가
arr.splice(0, 1, 20, 30, 40); //0번 인덱스에, 1개 지우고, 20 30 40 값 추가

arr.reverse();
arr.sort(); //오름차순 정렬
arr.sort((a, b) => b - a); //역순정렬

//================== forEach, map, filter, 
// find, some, every, reverse, includes, findIndex

//forEach 내부에는 반환안하는 함수사용
arr.forEach(function(a,b,c){
    console.log(a,b,c); //a:값, b:인덱스, c:배열
}) //배열의 인자 전체 출력

arr.forEach(a => console.log(a))
arr.forEach(console.log) 
//둘은 동일의미. console.log의 타입도 함수타입이라서 생략가능.
