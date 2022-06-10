// 类的装饰器，对类进行装饰，而不是实例
// 装饰器本身是一个函数
// 类装饰器接受的参数是构造函数
// 装饰器通过 @ 符号来使用

function ZhangtestDecorator(flag: boolean) {
    if (flag) {
        return function (constructor: any) {
            constructor.prototype.getName = () => {
                console.log('dell');
            };
        };
    } else {
        return function (constructor: any) {
        };
    }
}

@ZhangtestDecorator(true)
class Test1 {
}

const testDemo = new Test1();
(testDemo as any).getName();
