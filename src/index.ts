// 创建型设计模式
export { Sports, SportsFactory } from './creational/simple-factory'
export { BasketBall, Football } from './creational/factory'
export { AntaFactory, PikeFactory } from './creational/abstract-factory'
export { Singleton } from './creational/singleton'
export { Prototype } from './creational/prototype'
export { Person } from './creational/builder'

// 结构型设计模式
export { Adapter } from './structural/adapter'
export { BuySomething } from './structural/facade'
export { MyProxy } from './structural/proxy'
export { Decorator } from './structural/decorator'
export {
    Circular,
    Square,
    RedGraphics,
    GreenGraphics,
} from './structural/bridge'
export { ElementNode, TextNode } from './structural/composite'
export { Person as Flyweight } from './structural/flyweight'

// 行为型设计模式
export { Store } from './behavioral/observer'
export { HandlerChain } from './behavioral/chain-of-responsibility'
export { TextEditor, CopyComand, PasteComand } from './behavioral/command'
