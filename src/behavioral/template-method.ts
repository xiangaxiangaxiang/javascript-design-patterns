interface User {
    id: number
    name: string
}

const users: User[] = [
    {
        id: 1,
        name: 'cpx',
    },
    {
        id: 2,
        name: 'ccc',
    },
]

abstract class AbstractUsers {
    getUser(id: number) {
        let user = this.findUser(id)
        if (!user) {
            user = this.readFromDatabase(id)
        }
        return user
    }

    abstract findUser(id: number): User

    readFromDatabase(id: number): User {
        return users.find(item => (item.id = id))
    }
}

// 模拟Redis
class Redis {
    constructor(private address: string) {}

    private cache(id: number) {
        const cache: {
            [k: string]: User
        } = {
            '1': users[0],
            '2': users[1],
        }
        return cache[id.toString()]
    }

    get(id: number) {
        return this.cache(id)
    }
}

export class RedisUsers extends AbstractUsers {
    constructor() {
        super()
    }
    findUser(id: number) {
        const redis = new Redis('http://127.0.0.1:6379')

        return redis.get(id)
    }
}

export class LocalUsers extends AbstractUsers {
    private cache = new Map<number, User>()

    constructor() {
        super()
        users.forEach(item => {
            this.cache.set(item.id, item)
        })
    }

    findUser(id: number) {
        return this.cache.get(id)
    }
}

// 模板方法的核心思想是：父类定义骨架，子类实现某些细节。

console.log('========= 模版方法模式 =========')

// 如果用redis做缓存
const user1 = new RedisUsers().getUser(1)

// 如果用本地缓存
const user2 = new LocalUsers().getUser(2)

console.log(user1, user2)
