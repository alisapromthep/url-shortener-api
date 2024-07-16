import winston, { transports, format } from 'winston';

//**  Create new logs, and set to debug (info, warn, error msgs will be logged) */
export const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new transports.Console({
        format: format.combine(
            format.colorize(),
            format.simple(),
        )
        })
    ]
    });
