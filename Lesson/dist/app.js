"use strict";
class Department {
    static createEmployee(name) {
        return { name: name };
    }
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log(Department.fiscalYear);
    }
    describe() {
        console.log(`Department (${this.id}: ${this.name})`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfomation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2023;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastRepoet) {
            return this.lastRepoet;
        }
        throw new Error('Missing Report');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Missing Set Value');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastRepoet = reports[0];
    }
    addReport(text) {
        this.reports.push(text);
        this.lastRepoet = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
}
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.printEmployeeInfomation();
console.log(it);
const accoounting = new AccountingDepartment('d2', []);
accoounting.mostRecentReport = 'Full Year Accounting Report';
accoounting.addReport('Something');
console.log(accoounting.mostRecentReport);
accoounting.printReports();
accoounting.addEmployee('Max');
accoounting.addEmployee('Manu');
accoounting.printEmployeeInfomation();
