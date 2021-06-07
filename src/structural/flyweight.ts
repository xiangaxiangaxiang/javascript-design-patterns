export class Person {
    static persons: Map<number, Person> = new Map()
    static create(id: number, name: string, age: number) {
        let person = Person.persons.get(id)
        if (!person) {
            person = new Person(id, name, age)
            Person.persons.set(id, person)
        }
        return person
    }

    constructor(
        private id: number,
        private name: string,
        private age: number
    ) {}
}

// 如果一个对象实例一经创建就不可变，那么反复创建相同的实例就没有必要，直接向调用方返回一个共享的实例就行，这样即节省内存，又可以减少创建对象的过程，提高运行速度。
// 和单例模式的区别在于享元模式是可以存多个实例，如果存在则返回不存在则创建并缓存，而单例模式永远只有一个实例
console.log('========= 享元模式 =========')

const cpx = Person.create(32119907071234, 'cpx', 24)
const xpc = Person.create(32119907071232, 'xpc', 19)
const cpx1 = Person.create(32119907071234, 'cpx', 24)
console.log(cpx, xpc, cpx1)
console.log(Person.persons)
