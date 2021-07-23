require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');

const userCtrl = require('./controllers/userController');

const app = express();

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

app.use(express.json());
// app.use(express.static(`${__dirname}/../build`));

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30 
    }
  })
);

//User endpoints



massive({
  connectionString: CONNECTION_STRING,
  // @ts-ignore
  ssl: { rejectUnauthorized: false }
})
  .then((dbInstance) => {
    app.set('db', dbInstance);
    app.listen(SERVER_PORT, () => console.log(`DB and Server Connected to Port ${SERVER_PORT}`));
  })
  .catch((err) => console.log(err));