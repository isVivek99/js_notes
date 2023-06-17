export default class FancyLogger {
    constructor(){
        this.log = [];
    }

    logMessage(message){
        this.log.push(message);
        console.log(`Fancy : ${message}`);
    }

    printLogLength(){
        console.log(`length : ${this.log.length}`);
    }
}
