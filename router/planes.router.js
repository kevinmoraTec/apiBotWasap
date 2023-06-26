const express = require('express');
const router = express.Router();
const PlanesService = require('../services/planes.service');
const servicePlan = new PlanesService();

router.post('/', async (req, res, next) => {
  try {
    const dataJson = req.body;
    const dataCrear = await servicePlan.crearPlan(dataJson);
    res.json(dataCrear);
  } catch (error) {
    next(error);
  }
});

router.get('/userId/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const serviceId = await servicePlan.verificarDataUSerPlan(id);
    res.json(serviceId);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
