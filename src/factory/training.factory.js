const training = require('../models/training.model');

const getTraining = (request, h) => {
    return training.getTraining().then(res => {
        if (!res.length) {
            return { message: 'No data is available' };
        }
        return { message: 'A training data', data: res };
    })
        .catch(err => {
            return { error: err };
        })
}

const createTraining = (request, h) => {
    const payload = {
        features: request.payload.features,
        name: request.payload.name,
        start_date: request.payload.start_date,
        course_price: request.payload.course_price,
        course_detail_link: request.payload.course_detail_link,
        image_url: request.payload.image_url,
    }
    return training.createTraining(payload).then(res => {
        if (res) {
            return { message: 'Training added succesfully', data: res }
        }
    }).catch(err => {
        return { error: err };
    })
}

module.exports = {
    getTraining,
    createTraining
}