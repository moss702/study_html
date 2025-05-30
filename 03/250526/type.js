var num = 10;
console.log(typeof num);

var obj = {a:10, b:20}; //객체
var arr = [3,2,1, true, "가나다"]; //배열
var fn = function() {};
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof fn);

console.log(obj.a);
console.log(arr);

var str = `여기는 ${obj.b} 문자열` + "\nhello" +30;
console.log(str);