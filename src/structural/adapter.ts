interface VuePlugin {
    install: (vue: Vue) => void
}

class MyPlugin implements VuePlugin {
    constructor() {}

    install(vue: Vue) {
        // ...dosomething
    }
}

class OtherPlugin {
    constructor() {}

    run(vue: Vue) {
        // ...dosomething
    }
}

export class Adapter implements VuePlugin {
    constructor(
        private otherPlugin:OtherPlugin
    ) {}

    install(vue: Vue) {
        this.otherPlugin.run(vue)
    }
}



// 假装这里导入了Vue.js, vue.use方法接受一个方法或者暴露了install方法的对象，这里我们为了方便统一接受暴露install方法的对象
class Vue {
    use(obj: VuePlugin) {
        obj.install(this)
    }
}
const vue = new Vue()
vue.use(new MyPlugin())
vue.use(new Adapter(new OtherPlugin()))