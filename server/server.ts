import Express from 'express';
import {OK} from 'http-status-codes';

const api = Express.Router();

api.get('/health-check', (req: Express.Request, res: Express.Response) => {
    res.status(OK).send('Ok');
});

export {api};
