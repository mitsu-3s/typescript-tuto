function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string) {
    return function (_: Function) {
        const hookEl = document.getElementById(hookId)
        if (hookEl) {
            hookEl.innerHTML = template
        }
    }
}

// @Logger('Log output in progress - Person')
@WithTemplate('<h1>Person Object</h1>', 'app')
class Person {
    name = 'Max'

    constructor() {
        console.log('Creating a Person object')
    }
}

const pers = new Person()

console.log(pers)
