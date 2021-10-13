const express = require("express");
const app = express();
const routes = require('./routes');

require('./database/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000);
