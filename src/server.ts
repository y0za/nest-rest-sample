import { NestFactory } from 'nest.js';
import { ApiModule } from './api-module';

const port = 3000;
const app = NestFactory.create(ApiModule);

app.listen(port, () => {
  console.log('Application listen on port: ', port);
});
