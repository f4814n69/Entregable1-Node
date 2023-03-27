const express = require('express');

const repairController = require('../controllers/repairs.controller');

const routerRepair = express.Router();

routerRepair
  .route('/')
  .get(repairController.allRepair)
  .post(repairController.createRepair);

routerRepair
  .route('/:id')
  .get(repairController.repairById)
  .patch(repairController.updateRepair)
  .delete(repairController.deleteRepair);

module.exports = routerRepair;
