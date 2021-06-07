interface ENode {
    add(node: ENode): void
    children: ENode[]
    toXml(): string
}

export class ElementNode implements ENode {
    children: ENode[] = []
    constructor(private name: string) {}

    add(eNode: ENode) {
        this.children.push(eNode)
    }

    toXml() {
        const start = `<${this.name}>`
        const end = `</${this.name}>`
        let str = start
        this.children.forEach(child => {
            str += child.toXml()
        })
        return str + end
    }
}

export class TextNode implements ENode {
    children: ENode[] = []
    constructor(private text: string) {}

    add(eNode: ENode) {
        this.children.push(eNode)
    }

    toXml() {
        return this.text
    }
}

console.log('========= 组合模式 =========')
// Composite模式使得叶子对象和容器对象具有一致性，从而形成统一的树形结构，并用一致的方式去处理它们。

const root = new ElementNode('root')
const firstChild = new ElementNode('firstChild')
firstChild.add(new TextNode('这是第一个子节点'))
const secondChild = new ElementNode('secondChild')
secondChild.add(new TextNode('这是第二个子节点'))
root.add(firstChild)
root.add(secondChild)
const xml = root.toXml()
console.log(xml)
