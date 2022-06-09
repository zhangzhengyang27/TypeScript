// readonly
class Person1 {
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person1 = new Person1('Dell');
// 当赋值时会报错
// person1.name = 'hello';
console.log(person1.name);

// 抽象类
abstract class Geom {
  width: number;
  getType() {
    return 'Gemo';
  }
  abstract getArea(): number;
}

class Circle extends Geom {
  getArea() {
    return 123;
  }
}

// class Square {}
// class Triangle {}

interface Person {
  name: string;
}

interface Teacher extends Person {
  teachingAge: number;
}

interface Student extends Person {
  age: number;
}

interface Driver {
  name: string;
  age: number;
}

const teacher = {
  name: 'dell',
  teachingAge: 3
};

const student = {
  name: 'lee',
  age: 18
};

const getUserInfo = (user: Person) => {
  console.log(user.name);
};

getUserInfo(teacher);
getUserInfo(student);
