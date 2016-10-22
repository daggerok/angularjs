'use strict';
/**
 * Created by mak on 9/4/16.
 */
import express from 'express';
import {helpers, image} from 'faker';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';

const jwtHash = '_$#@igytreOkJUhgg7654crt/\\vybnumi,.po09876r5ctvBuYuim!`~+';
const app = express();
const port = 3000;
const api = '/api';

// // import path from 'path';
// // app.get('/', (req, res) => {
// //   res.sendFile(path.join(`${__dirname}/client/index.html`));
// // });
// app.use('/', express.static(`${__dirname}/client`));
/**
 * XMLHttpRequest cannot load http://localhost:3000/api/user.
 * No 'Access-Control-Allow-Origin' header is present on the requested resource.
 * Origin 'http://localhost:8000' is therefore not allowed access.
 */
app.use(cors());
app.use(bodyParser.json());

app.get(`${api}/user`, (req, res) => {
  const user = helpers.userCard();
  console.log(user);
  user.avatar = image.avatar();
  res.json(user);
});

import { auth, user } from './server/auth.middleware';

app.post(`${api}/login`, auth, (req, res) => {
  const token = jwt.sign({
    username: user.username
  }, jwtHash);
  res.send({ token, user });
});

app.listen(port, () => console.log(`api server listening port: ${port}`));
