const express = require('express');

const routerUser = require('./routes/usersRoutes.route');
const controllerRepair = require('./routes/repairRoutes.route');

const app = express();

app.use(express.json());

app.use('/api/v1/users', routerUser);
app.use('/api/v1/repairs', controllerRepair);

module.exports = app;
