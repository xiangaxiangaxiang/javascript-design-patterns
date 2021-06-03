class Ball {
    constructor(private boll: string) {}
}

export class Prototype {
    public date: Date
    public ball: Ball
    public name: string
    constructor() {}

    clone(): Prototype {
        const clone = Object.create(this)
        clone.ball = Object.create(this.ball)
        clone.date = Object.create(this.date)
        return clone
    }
}

console.log('========= 原型模式 =========')
const obj1 = new Prototype()
obj1.ball = new Ball('篮球')
obj1.date = new Date()
obj1.name = 'hello'

const obj2 = obj1.clone()

console.log(obj1.name === obj2.name)
console.log(obj1.date === obj2.date)
console.log(obj1.ball === obj2.ball)
console.log(obj1, obj2)
