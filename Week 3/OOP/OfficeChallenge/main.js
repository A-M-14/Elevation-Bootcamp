//write your code here to make the tests pass

class Employee{
    constructor(name){
        this.name = name;
    }

    work(office){
        for(let i = 0; i < 10; i++){
            office.documents.push(new Document(this.name));
        }
    }
}

class Cleaner{
    constructor(name){
        this.name = name;
    }

    clean(){
        console.log("Clean");

    }
}

class Manager{
    constructor(name){
        this.name = name;
        this.employees = [];
    }

    hireEmployee(name){
        this.employees.push(new Employee(name));
    }

    askEmployeesToWork(office){
        for(let emp of this.employees){
            emp.work(office)
        }
    }
}


class Document{
    constructor(EmployeeName){
        this.EmployeeName = EmployeeName;
    }
}


class Office{
    constructor(){
        this.documents = [];
        this.managers = [];
        this.cleaners = [];
    }

    hireManager(name){
        this.managers.push(new Manager(name));
    }

    hireCleaner(name){
        this.cleaners.push(new Cleaner(name));
    }

    startWorkDay(){
        for(let m of this.managers){
            m.askEmployeesToWork(this);
        }

        for(let c of this.cleaners){
            c.clean();
        }
    }
}