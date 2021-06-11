interface DiscountStrategy {
    getDiscount(total: number): number
}

// VIP打85折
class VipDiscountStrategy implements DiscountStrategy {
    getDiscount(total: number) {
        return total * 0.85
    }
}

// 满减
class OverDiscountStrategy {
    getDiscount(total: number) {
        return total > 100 ? total - 20 : total
    }
}

export class DiscountContext {
    // 默认使用策略:
    private strategy: DiscountStrategy = new OverDiscountStrategy()

    // 允许客户端设置新策略:
    setStrategy(strategy: DiscountStrategy) {
        this.strategy = strategy
    }

    calculatePrice(total: number) {
        return this.strategy.getDiscount(total)
    }
}

console.log('========= 策略模式 =========')

const pay = new DiscountContext()
// 使用满减

const actual1 = pay.calculatePrice(500)

// 使用VIP付款
pay.setStrategy(new VipDiscountStrategy())
const actual2 = pay.calculatePrice(500)

console.log(actual1, actual2)
