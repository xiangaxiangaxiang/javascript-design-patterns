// 核心类
abstract class Ball {
    abstract ballFactory(): Product
}

// 子类
export class BasketBall extends Ball {
    ballFactory() {
        return new ProduceBasketball()
    }
}

export class Football extends Ball {
    ballFactory() {
        return new ProduceFootball()
    }
}

// 对象
interface Product {
    produce(): string
}

class ProduceBasketball implements Product {
    produce() {
        return '篮球'
    }
}

class ProduceFootball implements Product {
    produce() {
        return '足球'
    }
}

// 工厂方法将实际创建对象的工作推迟到子类里，核心类成了抽象类
