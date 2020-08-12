const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var buildingSchema = new Schema({
    design_name: String,
    area: String,
    size: String,
    facing: String,
    pricing: Number,
    code: String,
    description: String,
    image_url: String,
    location: String,
    type: {
        type: String,
        enum: ['plan', 'elevation', 'interior_design']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const building = mongoose.model('building', buildingSchema, 'building');

const getBuilding = () => {
    return building.find();
}

const createBuilding = payload => {
    return getBuilding().then(response => {
        payload.code = 'MN-' + response.length;
        return building.create(payload);
    });
}

const getBuildingById = (buildingId) => {
    return building.findById(buildingId);
}

const getBuildingByType = (type, query) => {
    const sortValue = query.sort;
    const skipValue = query.skip || 0;
    const limitValue = query.limit || 0;
    let queryObject = {
        type: type
    }
    if (query.minPrice && query.maxPrice) {
        queryObject.pricing = { $gt: query.minPrice, $lt: query.maxPrice }
    } else {
        if (query.minPrice) {
            queryObject.pricing = { $gt: query.minPrice }
        }
        if (query.maxPrice) {
            queryObject.pricing = { $lt: query.maxPrice }
        }
    }
    if (sortValue) {
        return building.find(queryObject).skip(skipValue).limit(limitValue).sort({ pricing: sortValue });
    } else {
        return building.find(queryObject).skip(skipValue).limit(limitValue);
    }
}

module.exports = {
    getBuilding,
    createBuilding,
    getBuildingById,
    getBuildingByType
}