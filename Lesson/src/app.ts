type Admin = {
    name: string
    privileges: string[]
}

type Employee = {
    name: string
    startDate: Date
}

// interface ElevatedEmoloyee extends Employee, Admin {}

type ElevatedEmoloyee = Admin & Employee

const e1: ElevatedEmoloyee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b
}

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log(emp.name)
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges)
    }
    if ('startDate' in emp) {
        console.log('startDate: ' + emp.startDate)
    }
}

printEmployeeInformation({ name: 'Manu', startDate: new Date() })

class Car {
    drive() {
        console.log('Driving Car now')
    }
}

class Truck {
    drive() {
        console.log('Drivnig Truck now')
    }

    loadCargo(amount: number) {
        console.log('Loaded with luggage...' + amount)
    }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000)
    }
}

useVehicle(v1)
useVehicle(v2)

interface Bird {
    type: 'bird'
    flyingSpeed: number
}

interface Horse {
    type: 'horse'
    runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
    let speed
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed
            break
        case 'horse':
            speed = animal.runningSpeed
    }
    console.log('Speed: ' + speed)
}

moveAnimal({ type: 'bird', flyingSpeed: 10 })
