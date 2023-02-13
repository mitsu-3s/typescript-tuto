class Department {
    // private readonly id: string
    // name: string
    protected employees: string[] = []

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

class ITDepartment extends Department {
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, 'IT')
        this.admins = admins
    }
}

class AccountingDepartment extends Department {
    private lastRepoet: string

    get mostRecentReport() {
        if (this.lastRepoet) {
            return this.lastRepoet
        }
        throw new Error('Missing Report')
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Missing Set Value')
        }
        this.addReport(value)
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
        this.lastRepoet = reports[0]
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastRepoet = text
    }

    printReports() {
        console.log(this.reports)
    }

    addEmployee(name: string): void {
        if (name === 'Max') {
            return
        }
        this.employees.push(name)
    }
}

const it = new ITDepartment('d1', ['Max'])

it.addEmployee('Max')
it.addEmployee('Manu')

// it.employees[2] = 'Anna'
// it.name = 'NEW NAME'

it.describe()
it.printEmployeeInfomation()

console.log(it)

const accoounting = new AccountingDepartment('d2', [])

accoounting.mostRecentReport = 'Full Year Accounting Report'
accoounting.addReport('Something')
console.log(accoounting.mostRecentReport)
accoounting.printReports()

accoounting.addEmployee('Max')
accoounting.addEmployee('Manu')

accoounting.printEmployeeInfomation()

// const accountingCopy = { name: 'DUMMY', describe: it.describe }

// accountingCopy.describe()
