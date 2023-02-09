var arr =  [1,2,3,4,5,6];

arr.slice().reverse()
    .forEach(function(item) {
        console.log(item);
    });
const min = arr => arr.reduce((x, y) => Math.min(x, y));
const max = arr => arr.reduce((x, y) => Math.max(x, y));

var arr = ([3,67,15,37,-1,153,24]);

console.log("Min:", min(arr));
console.log("Max:", max(arr));
//более простой вариант но без array.prototype.reduce()
//console.log(Math.max.apply(null, [3,67,15,37,-1,153,24]))


//не совсем понял задание + код маленько переделал
let n =8;
var f = [0, 1];
if (n <= 2) {
    var result = f.slice(0, n);
} else {
    for (i = 0; i < n - 2; i++) {
        f.push(f[f.length - 1] + f[f.length - 2]);
    }
    let M = 3;
    let result = f.slice(M,n);
    console.log(result)
}

let nums1 = 3487
let nums2 = 3794
ArrayOfDigits1 = Array.from(String(nums1), Number);
ArrayOfDigits2 = Array.from(String(nums2), Number);
var countMatched = 0,countNotMatched = 0;
var length = Math.min(ArrayOfDigits1.length,ArrayOfDigits2.length);
for(var index=0;index<length;index++)
{
    if(ArrayOfDigits1[index] == ArrayOfDigits2[index])
        countMatched++;
    else if(ArrayOfDigits2.indexOf(ArrayOfDigits1[index]) >= 0)
        countNotMatched++;
}
let common = ArrayOfDigits1.filter(x => ArrayOfDigits2.includes(x));
c = common.length
console.log(countMatched,'and',c)
//возростание
var arr = [4, 23, 54 , 67 , 1 , 2 , 7, 90, 5, 12, 34, 21, 8, 18, 30];

arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);
//убывание
arr.sort(function (a, b) {
    return b - a;
});
console.log(arr);
//удаляет повторяшки
var g =[1,2,4,5,6,5,6,6,7,8]
var unique = g.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
})
console.log(unique)