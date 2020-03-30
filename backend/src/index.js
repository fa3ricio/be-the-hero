const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // Para que a aplicação entenda os objetos em formato Json
app.use(routes);
app.use(errors());

app.listen(3333);