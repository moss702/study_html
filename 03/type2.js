var o = {a:10};
o.c = 20;
var arr = [];
arr.length = 10;
console.log(arr[5]);
console.log(arr[100]);
// console.log(num);

var obj = 10;
if(obj){
    console.log('참인 경우 출력');
}

var num = 10;
console.log(typeof num);
num = Boolean(num);
console.log(typeof num, num);

var str = "abcd";
str = Number(str);
console.log(typeof str, str);

console.log(Number.MAX_VALUE);

console.log(0/0, 3/0);

console.log(isFinite(3), isFinite(Number.POSITIVE_INFINITY));
//isFinite : 끝이 있는가

n = null;
console.log(n, typeof n);

var fn = function(a, b) {
    return a + b;
};

var ret = fn(10,20);
console.log(ret);