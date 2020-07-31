import * as express from 'express';
import { api } from './server';

export default (app: any, http: any) => {
  app.use(express.json());
  app.use('/api', api);
};
