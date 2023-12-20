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

app.get('/index.html',(req, res) => {
  res.sendFile(path.join(__dirname + '/html/index.html'));
  })

app.get('/cartlist.html',(req, res) => {
  res.sendFile(path.join(__dirname + '/html/cartlist.html'));
  })

app.get('/wishlist.html',(req, res) => {
  res.sendFile(path.join(__dirname + '/html/wishlist.html'));
  })

app.get('/mypage.html',(req, res) => {
    res.sendFile(path.join(__dirname + '/html/mypage.html'));
  })
  
app.get('/signin.html',(req, res) => {
  res.sendFile(path.join(__dirname + '/html/signin.html'));
  })
  
app.get('/login.html',(req, res) => {
  res.sendFile(path.join(__dirname + '/html/login.html'));
  })

app.get('/gameinfo.html',(req, res) => {
  res.sendFile(path.join(__dirname + '/html/gameinfo.html'));
  })
  
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});

