interface ManipulatorInterface {
    set(key, value);
    get(key);
    delete(key);
    getObject();
}
 class ObjectManipulator implements ManipulatorInterface {
    constructor(protected obj) {}
    public set(key, value) {
        return new ObjectManipulator({...this.obj, [key]: value});
    }
    public get(key) {
        return this.obj[key];
    }
    public delete(key) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }
    public getObject() {
        return this.obj;
    }
}
interface IUser {
    name: string,
    age?: number,
    occupation: string,
    car?: string,
    children?: number;
}
let FirstUser: IUser = {

    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
    car: 'VW'
}
let SecondUser: IUser = {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
    children: 2
}
function printUser(user: IUser): void {

    console.log("name: ",  user.name)
    console.log("age: ",  user.age)
    console.log("occupation: ",  user.occupation)
    console.log("car: ",  user.car)
    console.log("Value of children: ",  user.children)
}

printUser(FirstUser);
printUser(SecondUser);

export function add(a: number, b: number) {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return (a + subB);
        };
    }
    return (a + b);
}
export function filter(filterer: any, input: []) {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}
