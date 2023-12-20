import express from 'express';
import { connPool } from './config/server.js';
import path from 'path';

const app = express();
const __dirname = path.resolve();

app.set('port', process.env.PORT || 3000);

connPool;

app.get('/',(req, res) => {
  res.sendFile(path.join(__dirname + '/html/index.html'));
  })

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});

