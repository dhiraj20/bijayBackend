const building = require('../factory/building.factory'),
    buildingValidation = require('../validations/building_validation');

const getbuilding = {
    description: 'Get a building details',
    auth: false,
    handler: (request, h) => building.getbuilding(request, h),
    tags: ['api', 'BUILDING']
}

const createBuilding = {
    description: 'Create a building',
    auth: false,
    handler: (request, h) => building.createBuilding(request, h),
    tags: ['api', 'BUILDING'],
    plugins: {
        'hapi-swagger': {
            payloadType: 'json'
        }
    },
    validate: buildingValidation.createBuildingValidation
}

const getBuildingById = {
    description: 'Get a building detail by id',
    auth: false,
    handler: (request, h) => building.getBuildingById(request, h),
    tags: ['api', 'BUILDING'],
    plugins: {
        'hapi-swagger': {
            payloadType: 'json'
        }
    },
    validate: buildingValidation.getBuildingByIdValidation
}

const getBuildingByType = {
    description: 'Get a building detail by type',
    auth: false,
    handler: (request, h) => building.getBuildingByType(request, h),
    tags: ['api', 'BUILDING'],
    plugins: {
        'hapi-swagger': {
            payloadType: 'json'
        }
    },
    validate: buildingValidation.getBuildingByTypeValidation
}

module.exports = {
    getbuilding,
    createBuilding,
    getBuildingById,
    getBuildingByType
}