const buildinngController = require('../controller/building.controller');

module.exports = [
    { method: 'GET', path: '/building', options: buildinngController.getbuilding },
    { method: 'POST', path: '/building', options: buildinngController.createBuilding },
    { method: 'GET', path: '/building/{id}', options: buildinngController.getBuildingById },
    { method: 'GET', path: '/building/type/{type}', options: buildinngController.getBuildingByType },
]
