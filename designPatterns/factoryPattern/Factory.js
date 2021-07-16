class Developer{
    constructor(name){
        this.name = name;
        this.type = "developer"
    }
}

class Tester{
    constructor(name){
        this.name = name;
        this.type = "tester"
    }
}

class CreateEmployeeCard {

    constructor(name,type){
        
        switch (type) {
            
            case "developer":
                return new Developer(name, type);
                break;

            case "tester":
                return new Tester(name,type);    
        
            default:
                break;
        }
    }
}

const dev1 = new CreateEmployeeCard("vivek", "developer");
const tester1 = new CreateEmployeeCard("satyam", "tester");
console.log(dev1);
console.log(tester1);
