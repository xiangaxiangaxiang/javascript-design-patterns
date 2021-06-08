interface Command {
    execute(): void
    undo(): void
}

export class TextEditor {
    textArr: string[] = []
    cache: string[]
    pastes: string[][] = []

    add(text: string) {
        this.textArr.push(text)
    }

    copy() {
        this.cache = Array.from(this.textArr)
    }

    paste() {
        this.pastes.push(this.cache)
        this.textArr = this.textArr.concat(this.cache)
    }

    toString() {
        return this.textArr.join('')
    }
}

export class CopyComand implements Command {
    constructor(private textEdit: TextEditor) {}
    execute() {
        this.textEdit.copy()
    }

    undo() {
        this.textEdit.cache = []
    }
}

export class PasteComand implements Command {
    constructor(private textEdit: TextEditor) {}
    execute() {
        this.textEdit.paste()
    }

    undo() {
        const item = this.textEdit.pastes.pop()
        if (item) {
            const { length } = this.textEdit.textArr
            this.textEdit.textArr.splice(length - 1 - item.length, item.length)
        }
    }
}

console.log('========= 命令模式 =========')
const textEdit = new TextEditor()
textEdit.add('c')
textEdit.add('p')
textEdit.add('x')

const copy = new CopyComand(textEdit)
const paste = new PasteComand(textEdit)

copy.execute()
paste.execute()
paste.execute()
paste.execute()
console.log(textEdit.toString())
copy.undo()
paste.undo()
console.log(textEdit.toString())
paste.execute()
console.log(textEdit.toString())
paste.undo()
paste.undo()
paste.undo()
console.log(textEdit.toString())
