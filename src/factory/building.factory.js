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
        design_name: request.payload.design_name,
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
            return { message: 'Building added succesfully', data: res }
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
    const query = request.query;
    console.log(query);
    return building.getBuildingByType(type, query).then(res => {
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