import FancyLogger from './FancyLogger.js';

const logger = new FancyLogger();
console.log(logger);
export default function logSecondImpl(){
    logger.printLogLength();
    logger.logMessage("second msg");
    logger.printLogLength();
}