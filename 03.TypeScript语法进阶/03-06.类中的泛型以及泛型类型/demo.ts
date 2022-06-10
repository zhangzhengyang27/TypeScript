interface Item {
    name: string;
}

class DataManager<T extends number | string> {
    constructor(private data: T[]) {
    }

    getItem(index: number): T {
        return this.data[index];
    }
}

const data = new DataManager<number>([1]);
data.getItem(0);

// 泛型继承接口
class DataManager1<T extends Item> {
    constructor(private data: T[]) {
    }

    getItem(index: number): T {
        return this.data[index];
    }
}

const data1 = new DataManager1([
    {
        name: 'dell'
    },
    {
        name: 'zhang'
    }
]);
data1.getItem(0);


// 如何使用泛型作为一个具体的类型注解
function hello<T>(params: T) {
    return params;
}

const func: <T>(param: T) => T = hello;

const func1: <T>(param: T) => T = <T>(params: T) => params;
