class Product {
    constructor(public name: string, public price: number) {}
}

interface Subscribe {
    name: string
    products: Product[]
    onPublished(product: Product): void
}

export class Store {
    subscribes: Map<string, Subscribe> = new Map()
    products: Product[] = []
    addSubscribe(subscribe: Subscribe) {
        this.subscribes.set(subscribe.name, subscribe)
    }

    removeSubscribe(subscribe: Subscribe) {
        this.subscribes.delete(subscribe.name)
    }

    addProduct(name: string, price: number) {
        const newProduct = new Product(name, price)
        this.products.push(newProduct)
        const subscribes = this.subscribes.values()
        let finish = false
        while (!finish) {
            const item = subscribes.next()
            item.value && item.value.onPublished(newProduct)
            finish = item.done
        }
    }
}

class Admin implements Subscribe {
    name: string
    products: Product[]
    constructor() {
        this.name = 'admin'
        this.products = []
    }
    onPublished(product: Product) {
        this.products.push(product)
    }
}

class Customer {
    name: string
    products: Product[]
    constructor() {
        this.name = 'customer'
        this.products = []
    }
    onPublished(product: Product) {
        this.products.push(product)
    }
}

console.log('========= 观察者模式 =========')

const customer = new Customer()
const admin = new Admin()

const store = new Store()
store.addSubscribe(customer)
store.addSubscribe(admin)

store.addProduct('牛肉干', 5)
store.addProduct('阔落', 3)
store.addProduct('雪糕', 2)

console.log(admin.products)
console.log(customer.products)
