// 在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。

export class Memento {
    private list: string[] = []
    constructor() {}

    // 其他方法实现....

    getList() {
        return this.list
    }

    setList(list: string[]) {
        this.list = list
    }
}

console.log('========= 备忘录模式 =========')

const demo = new Memento()

let state = demo.getList()

// do somethind
// .....
// 回滚状态

demo.setList(state)
