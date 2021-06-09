export class Mediator {
    static showMessage(name: string, message: string) {
        console.log(`[${new Date().toLocaleString()}] ${name} say: ${message}`)
    }
}

class User {
    constructor(private name: string) {}

    sendMessage(message: string) {
        Mediator.showMessage(this.name, message)
    }
}

console.log('========= 中介模式 =========')

const lei = new User('leijun')
const cpx = new User('cpx')

lei.sendMessage('are you ok?')
cpx.sendMessage('hello thank thank very much')
