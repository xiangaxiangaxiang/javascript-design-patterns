interface State {
    initState(): string
    reply(input: string): string
}

class ConnectedState implements State {
    initState() {
        return 'hello, are you ok ?'
    }

    reply(input: string) {
        if (input.endsWith('？')) {
            return `是的，${input.substring(0, input.length - 1)} 。`
        }
        return '吔屎啦你'
    }
}

class DisconnectedState implements State {
    initState() {
        return '撒哟娜拉'
    }

    reply(input: string) {
        return ''
    }
}

export class Bot {
    state: State
    constructor() {
        this.state = new DisconnectedState()
    }

    chat(input: string) {
        if (input === '你好，小陈') {
            this.state = new ConnectedState()
            return this.state.initState()
        } else if (input === '我走啦') {
            this.state = new DisconnectedState()
            return this.state.initState()
        }
        return this.state.reply(input)
    }
}

console.log('========= 状态模式 =========')

const bot = new Bot()
console.log(bot.chat('你好，小陈'))
console.log(bot.chat('你是猪？'))
console.log(bot.chat('吃屎把你'))
console.log(bot.chat('我走啦'))
