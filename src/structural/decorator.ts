console.log('========= 装饰器模式 =========')

export function Decorator(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value
    }
}


class Test {
    @Decorator(false)
    method(arg1:string, arg2: number) {
        console.log(arg1, arg2)
    }
}

const test = new Test()
test.method('hello', 123)

// 装饰器动态地给一个对象添加一些额外的职责。就增加功能来说，相比生成子类更为灵活。目前TS有实验性的支持装饰器。