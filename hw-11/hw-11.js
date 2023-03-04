function extendDeep(parent,child){
    let i,
        toStr = Object.prototype.toString,
        astr = "[object Array]";

    child = child || {};

    for (i in parent){
        if (parent.hasOwnProperty(i)){
            if (typeof parent[i] === "object"){
                child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
                extendDeep(parent[i], child[i]);
            } else{
                child[i] = parent[i];
            }
        }
    }
    return child;
}

let airplane = {
    model: "unknown",
    carrying: 0,
    capacity:0,
    range: 0

}

let airbus = extendDeep(airplane);
airbus.company = "Airbus corp."

let airbusA230 = extendDeep(airbus);
airbusA230.model = "‎Airbus A230";
airbusA230.carrying = 6000;
airbusA230.capacity = 2000;
airbusA230.range = 9000;

let boeing = extendDeep(airplane);
boeing.company = "Boeing corp."

let boeingMercury = extendDeep(boeing);
boeingMercury.model = "E-6 Mercury";
boeingMercury.carrying = 8700;
boeingMercury.capacity = 3300;
boeingMercury.range = 12300;

let boeingStratojet = extendDeep(boeing);
boeingStratojet.model = "B-47 Stratojet";
boeingStratojet.carrying = 9780;
boeingStratojet.capacity = 5600;
boeingStratojet.range = 5300;
let airport = {
    airplains : []
}
airport.airplains.push(boeingMercury);
airport.airplains.push(boeingStratojet);
airport.airplains.push(airbusA230);
console.log("Airport consist of ");
console.log(airport.airplains);

let val = (airport.airplains).reduce(function(previousValue, currentValue) {
    return {
        carrying: previousValue.carrying + currentValue.carrying,
        capacity: previousValue.capacity + currentValue.capacity
    }
});
console.log(val);
airport.airplains.sort((a, b) => parseFloat(b.range) - parseFloat(a.range));
console.log(airport.airplains);
let sortResult = airport.airplains.filter(obj => {
    return obj.capacity > 2000
})
console.log("Результат сортировки:",sortResult);
let sortResult1 = airport.airplains.filter(obj => {
    return obj.capacity > 2000 && obj.range > 6000
})
console.log("Результат сортировки:",sortResult1);