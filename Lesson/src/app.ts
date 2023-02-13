abstract class Department {
    static fiscalYear = 2023
    // private readonly id: string
    // name: string
    protected employees: string[] = []

    static createEmployee(name: string) {
        return { name: name }
    }

    constructor(protected readonly id: string, public name: string) {
        // this.id = id
        // this.name = n
        console.log(Department.fiscalYear)
    }

    abstract describe(this: Department): void
    // console.log(`Department (${this.id}: ${this.name})`)

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

    describe() {
        console.log('IT・ID: ' + this.id)
    }
}

class AccountingDepartment extends Department {
    private lastRepoet: string
    private static instance: AccountingDepartment

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

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
        this.lastRepoet = reports[0]
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance
        }
        this.instance = new AccountingDepartment('d2', [])
        return this.instance
    }

    describe() {
        console.log('Accounting・ID: ' + this.id)
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

const employee1 = Department.createEmployee('Max')
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment('d1', ['Max'])

it.addEmployee('Max')
it.addEmployee('Manu')

// it.employees[2] = 'Anna'
// it.name = 'NEW NAME'

it.describe()
it.printEmployeeInfomation()

console.log(it)

// const accoounting = new AccountingDepartment('d2', [])

const accounting = AccountingDepartment.getInstance()
const accounting2 = AccountingDepartment.getInstance()

console.log(accounting, accounting2)

accounting.mostRecentReport = 'Full Year Accounting Report'
accounting.addReport('Something')
console.log(accounting.mostRecentReport)

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

// accoounting.printReports()
// accoounting.printEmployeeInfomation()
accounting.describe()

// const accountingCopy = { name: 'DUMMY', describe: it.describe }

// accountingCopy.describe()
