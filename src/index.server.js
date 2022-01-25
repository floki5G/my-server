import express from 'express';
import Connection from './database/db.js';
import env from 'dotenv'
import cors from 'cors'
import userrouter from './routes/userroutes.js';
import postrouter from './routes/postroutes.js';

// import router from './routes/routes.js';


import path from 'path';
// envernoment variable
const app = express();

env.config();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});
app.use(cors())

app.use(express.json())

app.use("/api", userrouter)
app.use("/api",postrouter)




app.listen(process.env.API, () => {
  console.log(`SERVER IS RUNNING ${process.env.API}`)
})

Connection()
