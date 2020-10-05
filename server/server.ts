import Express from 'express';
import {OK} from 'http-status-codes';

const api = Express.Router();

api.get('/health-check', (req: Express.Request, res: Express.Response) => {
    res.status(OK).send('Ok');
});
// api.get('/get-primes', async (req: Express.Request, res: Express.Response) => {
//     const primes: number[] = await new Promise((resolve, reject) => {
//         fs.readFile('./server/prime-numbers.txt', 'utf8', (err, data) => {
//             if (err) throw err;
//             const result = data.split('\n').map((line: string) => {
//                 return +line.split(' ')[1];
//             });
//             resolve(result);
//         });
//     });
//     console.log(primes);
//     res.send(primes);
// });
export {api};
