// const userName = 'Max'
// // userName = 'Min'
// let age = 30

// age = 29

// function add(a: number, b: number) {
//     let result
//     result = a + b
//     return result
// }

// const add = (a: number, b: number) => {
//     return a + b
// }

// const add = (a: number, b: number = 1) => a + b

// const printOutput: (output: string | number) => void = (output) => {
//     console.log(output)
// }

// printOutput(add(2))

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0)
}

const addedNumbers = add(5, 10, 2, 3.7)
console.log(addedNumbers)

const button = document.querySelector('button')

if (button) {
    button.addEventListener('click', (event) => {
        console.log(event)
    })
}

const hobbies = ['Sports', 'Cooking']
const activeHobbies = ['Hiking', ...hobbies]

activeHobbies.push(...hobbies)

const [hobby1, hobby2, ...remainingHobbies] = hobbies
console.log(hobbies, hobby1, hobby2)

const person = {
    firstName: 'Max',
    age: 30,
}

const { firstName: userName, age } = person

console.log(userName, age, person)

const copiedPerson = {
    ...person,
}
