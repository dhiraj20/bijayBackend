const { getUser } = require('./user.model');

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var buildingSchema = new Schema({
    name: String,
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

const getBuildingByType = type => {
    return building.find({ type: type });
}

module.exports = {
    getBuilding,
    createBuilding,
    getBuildingById,
    getBuildingByType
}