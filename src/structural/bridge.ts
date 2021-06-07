interface Shape {
    draw: () => string
}

abstract class Graphics {
    constructor(protected shape: Shape) {}

    abstract coloring(): void
}

abstract class RefinedGraphics extends Graphics {
    constructor(protected shape: Shape) {
        super(shape)
    }

    coloring() {
        console.log(this.getColor() + this.shape.draw())
    }

    protected abstract getColor(): string
}

export class RedGraphics extends RefinedGraphics {
    constructor(protected shape: Shape) {
        super(shape)
    }

    getColor() {
        return '红色'
    }
}

export class GreenGraphics extends RefinedGraphics {
    constructor(protected shape: Shape) {
        super(shape)
    }

    getColor() {
        return '绿色'
    }
}

export class Circular implements Shape {
    draw() {
        return '圆形'
    }
}

export class Square implements Shape {
    draw() {
        return '正方形'
    }
}

console.log('========= 桥接模式 =========')
// 使用桥接模式的好处在于如果需要增加一个形状， 只需要实现shape接口，需要增加一种颜色的图形，只需要实现RefinedGraphics就行
const redCircular = new RedGraphics(new Circular())
redCircular.coloring()

const greenSquare = new GreenGraphics(new Square())
greenSquare.coloring()
