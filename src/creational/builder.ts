class Human {
    constructor(private skill = '保密', private hobby = '保密') {}

    getSkill() {
        return this.skill
    }

    getHobby() {
        return this.hobby
    }
}

class Name {
    constructor(public firstName: string, public lastName: string) {}
}

enum Works {
    CODE = '程序员',
    UI = '设计师',
    TEACH = '教师',
}

class Work {
    descript: string
    constructor(public work: Works) {
        switch (work) {
            case Works.CODE:
                this.descript = 'hello world'
                break
            case Works.UI:
                this.descript = '设计是一种艺术'
                break
            case Works.TEACH:
                this.descript = '分享也是一种快乐'
                break
            default:
                this.descript = ''
        }
    }

    changeWork(work: Works) {
        this.work = work
    }

    changeDescript(descript: string) {
        this.descript = descript
    }
}

export class Person {
    work: Work
    name: Name
    human: Human
    constructor(
        firstName: string,
        lastName: string,
        work: Works,
        skill?: string,
        hobby?: string
    ) {
        this.human = new Human(skill, hobby)
        this.name = new Name(firstName, lastName)
        this.work = new Work(work)
    }
}

const person = new Person('px', 'c', Works.CODE, '撸代码', '旅行')
console.log(person.human.getHobby())
console.log(person.human.getSkill())
console.log(person.name.firstName)
console.log(person.name.lastName)
console.log(person.work.work)
console.log(person.work.descript)
person.work.changeWork(Works.TEACH)
person.work.changeDescript('分享也是一种快乐')
console.log(person.work.work)
console.log(person.work.descript)
