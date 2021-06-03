// 代理模式 js 本身就有相关实现 Proxy对象

const obj = {
    a: 666,
    b: 'lalala',
    c: true,
}

const proxy = new Proxy(obj, {
    get: function (target, propKey, receiver) {
        if (propKey === 'a') {
            return 777
        } else if (propKey === 'b') {
            return 'dadata'
        } else if (propKey === 'c') {
            return false
        } else {
            return 'are you ok?'
        }
    },
    set: function (target, propKey, value, receiver) {
        console.log(target, propKey, value, receiver)
        return Reflect.set(target, propKey, value, receiver)
    },
})

console.log('========= 代理模式 =========')
console.log(proxy)
console.log(proxy.a)
console.log(proxy.b)
console.log(proxy.c)
proxy.a = 888
proxy.b = 'hahaha'
proxy.c = true

export const MyProxy = Proxy
