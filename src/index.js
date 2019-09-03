class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getName() {
        return this.name
    }
    eat() {
        alert(`${this.name} eat`)
    }
    speak() {
        alert(`${this.name} speak`)
    }
}
// let p = new Person('beartaotao')
// alert(p.eat())
/**
 * 继承 子类继承父类
 */
class Student extends Person {
    constructor(name, age, number) {
        super(name, age)
        this.number = number
    }
    grade() {
        alert(`${this.number}`)
    }
}

let xiongtaotao = new Student('xiongtaotao', 27, 'A1')
xiongtaotao.eat()