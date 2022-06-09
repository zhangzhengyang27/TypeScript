// private, protected, public 访问类型
// public 允许我在类的内外被调用
// private 允许在类内被使用
// protected 允许在类内及继承的子类中使用
class Person1 {
  public name: string;
  public sayHi() {
    this.name;
    console.log('hi');
  }
  private sayABC() {
    this.name;
  }
}

class Teacher1 extends Person1 {
  public sayBye() {
    this.sayHi();
  }
}

const person1 = new Person1();
person1.name = 'dell';
console.log(person1.name);
person1.sayHi();

// constructor
class Person2 {
  // 传统写法
  // public name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }

  // 简化写法
  constructor(public name: string) {}
}
const person2 = new Person2('dell');
console.log(person2.name);



class Person {
  constructor(public name: string) {}
}

class Teacher extends Person {
  constructor(public age: number) {
    super('dell');
  }
}

const teacher = new Teacher(28);
console.log(teacher.age);
console.log(teacher.name);
