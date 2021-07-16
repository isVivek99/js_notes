class FancyLogger{

    constructor(){
        if(FancyLogger.instance==null){
            this.logs=[];
            FancyLogger.instance = this;
        }else{
            return FancyLogger.instance;
        }  
    }

    log(message){
        this.logs.push(message);
        console.log(`Fancy: ${message}`);
    }

    printLogCount(){
        console.log(`length:${this.logs.length}`);
    }
}

const logger = new FancyLogger();
Object.freeze(logger);
export default logger;
