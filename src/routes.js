const express = require('express');
const routes = express.Router();

const RegistrationController = require('./controllers/RegistrationController');

routes.get('/costumers', RegistrationController.index);
routes.post('/costumers', RegistrationController.store);
routes.get('/costumers/:costumer_id', RegistrationController.findById)
routes.post('/costumers/:costumer_id', RegistrationController.update)
routes.delete('/costumers/:costumer_id', RegistrationController.delete);

module.exports = routes;