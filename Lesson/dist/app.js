"use strict";
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log(emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('startDate: ' + emp.startDate);
    }
}
printEmployeeInformation({ name: 'Manu', startDate: new Date() });
class Car {
    drive() {
        console.log('Driving Car now');
    }
}
class Truck {
    drive() {
        console.log('Drivnig Truck now');
    }
    loadCargo(amount) {
        console.log('Loaded with luggage...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
const userInputElement = document.getElementById('user-input');
userInputElement.value = 'Hello';
