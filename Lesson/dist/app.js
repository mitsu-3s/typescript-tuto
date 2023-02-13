"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
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
const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.printEmployeeInfomation();
console.log(it);
const accoounting = new AccountingDepartment('d2', []);
console.log(accoounting.mostRecentReport);
accoounting.addReport('Something');
accoounting.printReports();
accoounting.addEmployee('Max');
accoounting.addEmployee('Manu');
accoounting.printEmployeeInfomation();
