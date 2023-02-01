let numbers = [1,2,3,4,5,6]
if (numbers[0]+numbers[1]+numbers[2] === numbers[3]+numbers[4]+numbers[5]){
    console.log("Yes")
} else {
    console.log("No")
}
let n = 1000;
let num = 0;
while(n > 50) {
    n = n / 2
    console.log(n.toFixed(0));
    num++;
}
console.log("Число итераций:",num)
console.log("Конечное число:",n.toFixed(0));
let sum =0;
let arr = [12, 15, 20, 25, 59, 79]
let result = arr.reduce(function(sum,elem){
 return sum +elem;
}, 0);
result = result / arr.length
console.log("среднее арифметическое:",result);
let mass = [1, 2, 3, 4, 5]
mass.push('a','b','c');
console.log(mass)
mass.push(mass[3])
mass.push(mass[4])
mass.splice(3,2)
console.log(mass)
let ban = [1, 2, 3, 4, 5]
ban.shift()
ban.unshift(1,'a','b')
console.log(ban)
ban.pop()
ban.push('c', 5,'e')
console.log(ban)
let nab =  [3, 4, 1, 2, 7]
console.log(nab.sort((a, b) => a - b));