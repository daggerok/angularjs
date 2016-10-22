'use strict';
/**
 * Created by mak on 9/4/16.
 */
import express from 'express';

const app = express();
const port = 8000;

app.use('/', express.static(`${__dirname}/client`));
app.listen(port, () => console.log(`edge client server listening port: ${port}`));
