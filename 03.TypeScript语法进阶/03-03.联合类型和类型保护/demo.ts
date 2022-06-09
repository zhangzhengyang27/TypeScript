interface Bird {
    fly: boolean;
    sing: () => {};
}

interface Dog {
    fly: boolean;
    bark: () => {}
}

function traninAnimal(animal: Bird | Dog) {
    // animal.fly; 通过断言的方式
    if (animal.fly) {
        // 断言成Bird
        (animal as Bird).sing();
    } else {
        (animal as Dog).bark();
    }
}

// in 语法做类型保护
function traninAnimal2(animal: Bird | Dog) {
    if ("sing" in animal) {
        animal.sing
    } else {
        animal.bark
    }
}

// typeof 语法
function add(first: string | number, second: string | number) {
    if (typeof first === 'string' || typeof second === 'string') {
        return `${first}${second}`
    }
    return first + second;
}

class NumberObj {
    count: number
}

function add2(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0
}
