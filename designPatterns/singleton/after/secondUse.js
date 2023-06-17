import logger from './fancyLogger.js';
// const logger = new FancyLogger();
// console.log(logger);

export default function logFirstFunction(){
    logger.printLogCount();
    logger.log("second use");
    logger.printLogCount();
}