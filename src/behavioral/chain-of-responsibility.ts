class AmountRequest {
    constructor(public name: string, public amount: number) {}
}

enum Result {
    SUCCESS,
    FAILURE,
    NEXT,
}

interface Handler {
    process(amountRequest: AmountRequest): Result
}

class FirstHandler implements Handler {
    process(amountRequest: AmountRequest) {
        if (amountRequest.amount < 100) {
            return Math.random() > 0.5 ? Result.SUCCESS : Result.FAILURE
        }
        return Result.NEXT
    }
}

class SecondHandler implements Handler {
    process(amountRequest: AmountRequest) {
        if (amountRequest.amount < 1000) {
            return Math.random() > 0.5 ? Result.SUCCESS : Result.FAILURE
        }
        return Result.NEXT
    }
}

class LastHandler implements Handler {
    process(amountRequest: AmountRequest) {
        return Math.random() > 0.5 ? Result.SUCCESS : Result.FAILURE
    }
}

export class HandlerChain {
    private handlers: Handler[] = []
    constructor() {}

    addHander(handler: Handler) {
        this.handlers.push(handler)
        return this
    }

    process(amountRequest: AmountRequest) {
        let result: Result
        let handler: Handler
        for (let i of this.handlers) {
            result = i.process(amountRequest)
            handler = i
            if (result !== Result.NEXT) {
                break
            }
        }
        return {
            result,
            handler,
        }
    }
}

console.log('========= 责任链模式 =========')

const chain = new HandlerChain()

const firstHander = new FirstHandler()
const secondHander = new SecondHandler()
const lastHandler = new LastHandler()
chain.addHander(firstHander).addHander(secondHander).addHander(lastHandler)

console.log(chain.process(new AmountRequest('cpx', 99)))
console.log(chain.process(new AmountRequest('xxx', 999)))
console.log(chain.process(new AmountRequest('ccc', 99999)))
