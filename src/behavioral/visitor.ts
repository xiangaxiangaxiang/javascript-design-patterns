interface Component {
    accept(visitor: Visitor): void
}

class ConcreteComponentA implements Component {
    public accept(visitor: Visitor): void {
        visitor.visitConcreteComponentA(this)
    }

    public exclusiveMethodOfConcreteComponentA(): string {
        return 'A'
    }
}

class ConcreteComponentB implements Component {
    public accept(visitor: Visitor): void {
        visitor.visitConcreteComponentB(this)
    }

    public specialMethodOfConcreteComponentB(): string {
        return 'B'
    }
}

interface Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void

    visitConcreteComponentB(element: ConcreteComponentB): void
}

class ConcreteVisitor1 implements Visitor {
    public visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(
            `${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor1`
        )
    }

    public visitConcreteComponentB(element: ConcreteComponentB): void {
        console.log(
            `${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor1`
        )
    }
}

class ConcreteVisitor2 implements Visitor {
    public visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(
            `${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor2`
        )
    }

    public visitConcreteComponentB(element: ConcreteComponentB): void {
        console.log(
            `${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor2`
        )
    }
}
