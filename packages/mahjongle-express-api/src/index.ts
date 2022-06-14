import express from 'express';
import { db } from './db';

const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json()); // To parse the incoming requests with JSON payloads

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/users', async (request, response) => {
  const data = await db.any('select * from "user"', [true]);
  console.log(data);
  response.json(data);
});

app.get('/tiles', async (request, response) => {
  const data = await db.any('select * from "tile"', [true]);
  response.json(data);
});

// add a new user, if it doesn't exist yet, and return the object:
// app.get('/users/add/:name/:email', req => {
//   return db.task('add-user', async t => {
//       // const user = await t.users.findByName(req.params.name);
//       // return user || await t.users.add(req.params.name);
//   });
// });

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});