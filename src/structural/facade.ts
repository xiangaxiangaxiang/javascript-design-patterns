class CreateOrder {
    orderNum: number
    constructor() {
        this.orderNum = Date.now()
    }
}

class CreateLogisticsOrder {
    orderNum: number
    constructor() {
        this.orderNum = Date.now()
    }
}

class CreatePayOrder {
    orderNum: number
    constructor() {
        this.orderNum = Date.now()
    }
}

/* 

class xxxx 
等等等等
*/

export class BuySomething {
    order: CreateOrder
    logisticsOrder: CreateLogisticsOrder
    payOrder: CreatePayOrder
    constructor(private id: number) {
        this.order = new CreateOrder()
        this.logisticsOrder = new CreateLogisticsOrder()
        this.payOrder = new CreatePayOrder()
        // .... 更多步骤
    }
}

/* 
    外观模式隐藏系统的复杂性，并向客户端提供了一个客户端可以访问系统的接口
    例如我们网购一样东西，对于我们用户而言，我们只需要下定付款就行，至于后台怎么生成订单，怎么与物流对接，
怎么与支付系统对接以及一些其他的实现我们不需要管，只需要静静的等着拿快递就好
 */

