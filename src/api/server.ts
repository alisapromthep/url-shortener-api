import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
import responseTime from 'koa-response-time';

import { DATABASE_URL, logger, PORT } from '../utils';

const app = new Koa();

app
    .use(cors({
        origin: '*',
        exposeHeaders: ['ETag', 'If-None-Match, X-Response-Time'],
    }))
    .use(bodyParser({
        jsonLimit: '10mb',
    }))
    .use(responseTime({ hrtime: true }))
    .use(compress());


app.listen(PORT, () => {
    logger.info(`Server listening on PORT: ${PORT}`);
    logger.info(`DATABASE_URL: ${DATABASE_URL}`);
});

export default app;
