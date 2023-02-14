// const names: Array<string> = [] // Same as string[].
// // names[0].split(' ')

// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10)
//     }, 2000)
// })

// promise.then((data) => {
//     // data.split(' ')
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 })
console.log(mergedObj)

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'No Value'
    if (element.length > 0) {
        descriptionText = 'Value Count is ' + element.length
    }
    return [element, descriptionText]
}

console.log(countAndDescribe(['Sports', 'Cooking']))

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return 'Value: ' + obj[key]
}

extractAndConvert({ name: 'Max' }, 'name')
