function testDecorator() {
    // (...args: any[]) => any 是一个函数，返回值是any类型的
    return function <T extends new (...args: any[]) => any>(constructor: T) {
        return class extends constructor {
            name = 'lee';

            getName() {
                return this.name;
            }
        };
    };
}

// testDecorator()(class{})  里面的函数class{} 是一个参数
const Test = testDecorator()(
    class {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }
);

const test = new Test('dell');
console.log(test.getName());  // dell
