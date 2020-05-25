const express = require("express");
const helmet = require('helmet')
const cors = require('cors')
const userRouter = require('../users/users-router')
const authRouter = require('../auth/auth-router')

const server = express();

server.use(helmet())
server.use(express.json())
server.use(cors());

server.use('/api/auth', authRouter)
server.use('/api/users', userRouter);
//server.use()

server.get("/", (req, res) => {
  res.status(200).json({ api: "up and running" });
});


module.exports = server;
