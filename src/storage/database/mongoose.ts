import mongoose from 'mongoose';
import { DATABASE_URL, logger } from '../../utils';
import { linkSchema } from './models/link';

mongoose.connect(DATABASE_URL);
mongoose.set('debug', true);

mongoose.connection.on('error', ((err) => {
    logger.error(`DATABASE | ${JSON.stringify(err)}`);
}));

mongoose.connection.once('connected', (() => {
    logger.info(`DATABASE | ${DATABASE_URL}`);
}));

const LinksModel = mongoose.model('links', linkSchema);

export {
    mongoose,
    LinksModel
};
