import * as express from 'express';
import * as bodyParser from 'body-parser';
import { NestFactory } from 'nest.js';
import { ApiModule } from './api-module';

const instance = express();
instance.use(bodyParser.json());

const port = 3000;
const app = NestFactory.create(ApiModule, instance);

app.listen(port, () => {
  console.log('Application listen on port: ', port);
});
