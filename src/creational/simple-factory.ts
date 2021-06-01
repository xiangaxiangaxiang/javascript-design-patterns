class Basketball {
    private intro: string
    constructor() {
        this.intro = '这是篮球类'
    }

    getMember() {
        console.log('一个队伍上场5名球员')
    }

    say() {
        console.log(this.intro)
    }
}

class Football {
    private intro: string
    constructor() {
        this.intro = '这是足球类'
    }

    getMember() {
        console.log('足球一个队伍需要上场11名球员')
    }

    say() {
        console.log(this.intro)
    }
}

class Tennis {
    private intro: string
    constructor() {
        this.intro = '这是网球类'
    }

    getMember() {
        console.log('网球为一对一的运动')
    }

    say() {
        console.log(this.intro)
    }
}

export enum Sports {
    FOOTBALL,
    BASKETBALL,
    TENNIS,
}

export function SportsFactory(name: Sports) {
    switch (name) {
        case Sports.BASKETBALL:
            return new Basketball()
        case Sports.FOOTBALL:
            return new Football()
        case Sports.TENNIS:
            return new Tennis()
        default:
            throw new Error('我们没有这种运动')
    }
}

// example
const football = SportsFactory(Sports.FOOTBALL)
football.say()
football.getMember()

const basketball = SportsFactory(Sports.BASKETBALL)
basketball.say()
basketball.getMember()
