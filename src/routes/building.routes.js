const buildingController = require('../controller/building.controller');

module.exports = [
    { method: 'GET', path: '/building', options: buildingController.getbuilding },
    { method: 'POST', path: '/building', options: buildingController.createBuilding },
    { method: 'GET', path: '/building/{id}', options: buildingController.getBuildingById },
    { method: 'GET', path: '/building/type/{type}', options: buildingController.getBuildingByType },
]
