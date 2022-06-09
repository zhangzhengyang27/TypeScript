// interface 和 type 相类似，但并不完全一致
interface Person {
    // readonly name: string;
    name: string;
    // ？ 代表可有可无
    age?: number;

    // 代表可以有其他的值，名为string 值为any类型
    [propName: string]: any;

    say(): string; // 返回string
}

interface Teacher extends Person {
    teach(): string;
}

//  (word: string): string; 代表 参数和返回值
interface SayHi {
    (word: string): string;
}

const getPersonName = (person: Person): void => {
    console.log(person.name);
};

const setPersonName = (person: Teacher, name: string): void => {
    person.name = name;
};


// 即使多个字段，这个样子写不会报错
const person = {
    name: 'dell',
    sex: 'male',
    say() {
        return 'say hello';
    },
    teach() {
        return 'teach';
    }
};

getPersonName(person);
setPersonName(person, 'lee');

// 也可以赋值成功
getPersonName({
    name: 'dell',
    sex: 'male',
    say() {
        return 'say hello';
    },
    teach() {
        return 'teach';
    }
});

// 要求必须要有name,say()的方法
class User implements Person {
    name = 'dell';

    say() {
        return 'hello';
    }
}

const say: SayHi = (word: string) => {
    return word;
};
