function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }
}

@Logger('Log output in progress - Person')
class Person {
    name = 'Max'

    constructor() {
        console.log('Creating a Person object')
    }
}

const pers = new Person()

console.log(pers)
