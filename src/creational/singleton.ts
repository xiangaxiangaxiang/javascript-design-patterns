export class Singleton {
    private static instance: Singleton

    constructor() {}

    static getInstance() :Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }
}

// example
const i1 = Singleton.getInstance()
const i2 = Singleton.getInstance()

console.log(i1 === i2)