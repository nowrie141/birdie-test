import { Server } from './Server';
import * as express from 'express';
import * as path from 'path';

const app = express();

const port = 8000

var mysql = require('mysql')

var connection = mysql.createPool({
  host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
  port: '3306',
  user: 'test-read',
  password: 'xnxPp6QfZbCYkY8',
  database: 'birdietest'
})

const sql = 'select *, str_to_date(timestamp, "%Y-%m-%dT%H:%i:%s") as time from birdietest.events order by time;'

app.set('port', port)

app.use(function (_req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header("Access-Control-Allow-Methods", 'PUT, POST, GET, DELETE, OPTIONS');
  next();
})

app.use(express.static(path.join(__dirname, 'build')))

app.get('/data', function (_req: any, res: any, _next: any) {
  connection.query(sql, function (err: any, result: any, _fields: any) {
    if (err) throw err
    // const jsonData = JSON.parse(JSON.stringify(result));
    console.log("Sending data...");
    res.send({ data: result })
  });
});

app.get('/*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const server = new Server(app);
server.start(port)
