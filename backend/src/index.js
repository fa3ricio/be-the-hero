const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // Para que a aplicação entenda os objetos em formato Json
app.use(routes);

app.listen(3333);