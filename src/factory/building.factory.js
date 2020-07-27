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
        area: request.payload.area,
        description: request.payload.description,
        pricing: request.payload.pricing,
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
    return getBuildingById(request.params.id).then(res => {
        if (res) {
            return res;
        }
    }).catch(err => {
        return { error: err };
    })
}

const getBuildingByType = (request, h) => {
    const type = request.params.type;
    return getBuildingByType(type).then(res => {
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