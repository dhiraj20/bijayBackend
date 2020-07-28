const building = require('../models/building.model');

const getbuilding = (request, h) => {
    return building.getBuilding().then(res => {
        if (!res.length) {
            return { message: 'No data is available' };
        }
        return res;
    })
        .catch(err => {
            return { error: err };
        })
}

const createBuilding = (request, h) => {
    const payload = {
        nname: request.payload.name,
        area: request.payload.area,
        size: request.payload.size,
        facing: request.payload.facing,
        pricing: request.payload.pricing,
        description: request.payload.description,
        location: request.payload.location,
        image_url: request.payload.image_url,
        type: request.payload.type
    }
    return building.createBuilding(payload).then(res => {
        if (res) {
            return { message: 'User added succesfully', data: res }
        }
    }).catch(err => {
        return { error: err };
    })
}

const getBuildingById = (request, h) => {
    const buildingId = request.params.id;
    return building.getBuildingById(buildingId).then(res => {
        if (res) {
            return res;
        }
    }).catch(err => {
        return { error: err };
    })
}

const getBuildingByType = (request, h) => {
    const type = request.params.type;
    return building.getBuildingByType(type).then(res => {
        if (res) {
            return res;
        }
    }).catch(err => {
        return { error: err };
    })
}

module.exports = {
    getbuilding,
    createBuilding,
    getBuildingById,
    getBuildingByType
}