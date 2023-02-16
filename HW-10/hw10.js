//3 promises task
function returnRandomNumber(min, max) {
    let result = Math.floor(Math.random() * (max -  min + 1) + min);
    console.log(result)
    return result;
}
const promOne = returnResult1()
const promTwo = returnResult2()
const promThree = returnResult3()

function returnResult1() {
    return new Promise((res) => {
        const timeout = returnRandomNumber(1, 5);
        setTimeout(() => {
            res(1)
        }, timeout * 1000);
    })
}
function returnResult2() {
    return new Promise((res) => {
        const timeout = returnRandomNumber(1, 5);
        setTimeout(() => {
            res(2)
        }, timeout * 1000);
    })
}
function returnResult3() {
    return new Promise((res) => {
        const timeout = returnRandomNumber(1, 5);
        setTimeout(() => {
            res(3)
        }, timeout * 1000);
    })
}

Promise.race([promOne, promTwo, promThree]).then(value => console.log("Минимальная задержка в:",value));
const promFour = GetNum()
function GetNum() {
    return new Promise((res) => {
        const val = returnRandomNumber(1, 5);
        setTimeout(() => {
            res(0+val)
        }, 3000);
    })
}
async function asyncFunc() {
    await promFour
        .then(value => {
        console.log('Полученое число в квадрате:',value*value);
    })
};
asyncFunc()
function GetNum1() {
    return new Promise((res) => {
        const val = returnRandomNumber(1, 5);
        setTimeout(() => {
            res(0+val)
        }, 3000);
    })
}
const promFive = GetNum1()
const promSix = GetNum2()
function GetNum2() {
    return new Promise((res) => {
        const val = returnRandomNumber(6, 10);
        setTimeout(() => {
            res(0+val)
        }, 5000);
    })
}
async function asyncFunc1(a,b,x) {
    await promFive
        .then(value => {
            b = value
            console.log('Первое число:', value);
        })
    await promSix
        .then(value => {
           a = value
            console.log('Второе число:', value);
        })
    x = a + b
    console.log('Сумма:', x)
}
asyncFunc1()
