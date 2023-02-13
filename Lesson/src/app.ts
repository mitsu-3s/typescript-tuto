class Department {
    // private readonly id: string
    // name: string
    private employees: string[] = []

    constructor(private readonly id: string, public name: string) {
        // this.id = id
        // this.name = n
    }

    describe(this: Department) {
        console.log(`Department (${this.id}: ${this.name})`)
    }

    addEmployee(employee: string) {
        // validation etc
        // this.id = 'd2'
        this.employees.push(employee)
    }

    printEmployeeInfomation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting = new Department('d1', 'Accounting')

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

// accounting.employees[2] = 'Anna'
// accounting.name = 'NEW NAME'

accounting.describe()
accounting.printEmployeeInfomation()

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }

// accountingCopy.describe()
