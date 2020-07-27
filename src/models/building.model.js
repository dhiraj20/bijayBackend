const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var buildingSchema = new Schema({
    area: String,
    pricing: Number,
    description: String,
    image_url: String,
    location: String,
    type: {
        type: String,
        enum: ['plan', 'elevation', 'interior_design']
    }
});

const building = mongoose.model('building', buildingSchema, 'building');

const getBuilding = () => {
    return building.find();
}

const createBuilding = payload => {
    return building.create(payload);
}

const getBuildingById = buildingId => {
    console.log('buildingId', buildingId)
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