import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2A', (req, res) => {
  const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(sum.toString());
});
 // tASK2B
app.get('/task2B', (req, res) => {
  const fname = req.query.fullname;
  var fio = fname.split(' ');
  var answer = 'Invalid fullname';
  const nwords = fio.length; 
  if (nwords == 3) {
  	answer = (fio[2] + ' ' + fio[0].substring(0,1) + '. ' + fio[1].substring(0,1) + '.');
  }
  if (nwords == 2) {
  	answer = (fio[1] + ' ' + fio[0].substring(0,1) + '.');
  }
  if (nwords == 1) {
  	answer = (fio[0]);
  }
  if (!fname) {
  	answer = 'Invalid fullname';
  }
  if (fname.match('[0-9]') != null) {
  	answer = 'Invalid fullname';
  }
  res.send(answer);
});

app.get('/task2C', (req, res) => {
const url = req.query.username;
const re = new RegExp('@?(https?:)?(\/\/)?((www|twitter|github|telegram|vk|vkontakte)[^\/]*\/)?([a-zA-Z0-9]*)', 'i');
const usr = url.match(re);
/*console.log(usr[5]);*/
res.send('@' + usr[5]);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
