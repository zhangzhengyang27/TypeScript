// 普通方法，target 对应的是类的 prototype
// 静态方法，target 对应的是类的构造函数

function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(target, key);
    // { getName: [Function (anonymous)] } getName

    // 方法不可以被修改
    // descriptor.writable = true;
    // descriptor.value = function () {
    //     return 'decorator';
    // };
}

// 在类的方法增加之后就对方法进行装饰
class Test {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @getNameDecorator
    getName() {
        return this.name;
    }
}

const test = new Test('dell');
console.log(test.getName());
