const Joi = require('joi');

const createTrainingValidation = {
    payload: Joi.object({
        features: Joi.array().required().description('features list'),
        name: Joi.string().required().default('Auto Cad'),
        start_date: Joi.string().default('12/22/2020'),
        course_price: Joi.string().required().default('10000'),
        course_detail_link: Joi.string().required().default('https://firebasestorage.googleapis.com/v0/b/spreadsheetdemo-3a75b.appspot.com/o/training%2Fwebpack.pdf?alt=media&token=1505f843-d9ec-4120-8bb8-1b314d6333b4'),
        image_url: Joi.string().required().default('https://firebasestorage.googleapis.com/v0/b/spreadsheetdemo-3a75b.appspot.com/o/images%2Fauto%20cad.png?alt=media&token=87985f75-961e-4e9b-8e63-c4cff094a6c8'),
    })
}

module.exports = {
    createTrainingValidation
}