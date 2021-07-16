import FancyLogger from './FancyLogger.js';

const logger = new FancyLogger();

export default function logFirstImpl(){
    logger.printLogLength();
    logger.logMessage("first msg");
    logger.printLogLength();
    console.log("-----------------");
}