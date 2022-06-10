// @ts-ignore
import express, { Request, Response, NextFunction } from 'express';
// @ts-ignore
import bodyParser from 'body-parser';
import router from './router';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req: Request, res: Response, next: NextFunction) => {
  req.teacherName = 'dell';
  next();
});
app.use(router);

app.listen(7002, () => {
  console.log('server is running');
});
