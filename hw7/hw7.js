let n =0;
for (let i = 0; i < 3; i++) {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    n= n + randomNumber1;
}
console.log(n);
let f =0;
for (let i = 0; i < 3; i++) {
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    f= f + randomNumber2;
}
console.log(f);
if (n > f) {
    console.log( "First player wins!" );
} else if (n < f) {
    console.log("Second player wins!");
} else {
    console.log("Draw!");
}
//дата которая не робит
let DateOne = new Date('January 1, 2020 00:00:00')
let DateTwo = new Date('January 31, 2023 00:00:00')
console.log(DateOne)
console.log(DateTwo)
let d=0;
//let day = 60 * 60 * 24 * 1000;
let dayWeek = DateOne.getDay();
let dateWeek =DateOne.getDate();
while (DateOne <= DateTwo) {
    if ((dayWeek === 5) && (dateWeek === 13)) {
        d=d+1;
    }
    DateOne.setDate(DateOne.getDate() + 1)
}
console.log(d);
//разбивка 15 на 3 числа
    var n1 = Math.ceil(Math.random()*14);
    var n2 = Math.ceil(Math.random()*(15-n1));
    var n3 = 15 - n1 - n2;
    console.log(n1 + " " + n2 + " " + n3);
//разбивка на 3 числа с двумя знаками после запятой
var n1 = (Math.random()*14);
var n2 = (Math.random()*(15-n1));
var n3 = 15 - n1 - n2;
console.log(n1.toFixed(2) + " " + n2.toFixed(2) + " " + n3.toFixed(2));
