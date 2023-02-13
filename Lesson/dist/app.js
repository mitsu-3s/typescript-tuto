"use strict";
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', (event) => {
        console.log(event);
    });
}
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];
activeHobbies.push(...hobbies);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
const person = {
    firstName: 'Max',
    age: 30,
};
const { firstName: userName, age } = person;
console.log(userName, age, person);
const copiedPerson = Object.assign({}, person);
