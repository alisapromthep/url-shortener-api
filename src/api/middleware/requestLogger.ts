import { Context, Next } from 'koa';
import { logger } from '../../utils';

//koa's middleware function: logs details about incoming HTTP request

//Context: object for a request 
//Nest: Function that executes the next middleware in the stack 

export const requestLogger = async (ctx: Context, next: Next): Promise<void> => {
const message = `${ctx.method} [${ctx.status}] ${ctx.originalUrl} | ${new Date().toISOString()}`;
    if (ctx.status >= 400) {
    logger.error(message, ctx.body);
    } else {
    logger.info(message);
    }
    await next();
};
