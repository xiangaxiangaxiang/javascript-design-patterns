// js有迭代器的实现
function* each() {
    yield 1
    yield 2
}
let finish = false
const a = each()
while (!finish) {
    const item = a.next()
    finish = item.done
    console.log(item.value)
}
