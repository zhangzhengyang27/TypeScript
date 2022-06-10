// @ts-ignore
import express, { Request, Response, NextFunction } from 'express';
// @ts-ignore
import bodyParser from 'body-parser';
// @ts-ignore
import cookieSession from 'cookie-session';
import router from './router';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: 'session',
    keys: ['teacher dell'],
    maxAge: 24 * 60 * 60 * 1000
  })
);

app.use(router);

app.listen(7003, () => {
  console.log('server is running');
});
