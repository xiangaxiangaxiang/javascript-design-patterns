interface AbstractBall {
    produceBasketball(): Basketball
    produceFootball(): Football
}

export class AntaFactory implements AbstractBall {
    produceBasketball() {
        return new AntaBasketball()
    }
    produceFootball() {
        return new AntaFootball()
    }
}

export class PikeFactory implements AbstractBall {
    produceBasketball() {
        return new PikeBasketball()
    }
    produceFootball() {
        return new PikeFootball()
    }
}

interface Basketball {
    produce(): string
}

class AntaBasketball implements Basketball {
    produce() {
        return '这是一个安踏篮球'
    }
}

class PikeBasketball implements Basketball {
    produce() {
        return '这是一个匹克篮球'
    }
}

interface Football {
    produce(): string
}

class AntaFootball implements Football {
    produce() {
        return '这是一个安踏足球'
    }
}

class PikeFootball implements Football {
    produce() {
        return '这是一个匹克足球'
    }
}
