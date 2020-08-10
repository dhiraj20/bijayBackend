const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var trainingSchema = new Schema({
    features: [String],
    name: String,
    start_date: Date,
    course_price: Number,
    course_detail_link: String,
    image_url: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const training = mongoose.model('training', trainingSchema, 'training');

const getTraining = () => {
    return training.find();
}

const createTraining = payload => {
    return training.create(payload);
}


module.exports = {
    getTraining,
    createTraining,
}