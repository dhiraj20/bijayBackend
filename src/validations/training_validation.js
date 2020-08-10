const Joi = require('joi');

const createTrainingValidation = {
    payload: Joi.object({
        features: Joi.array().required().description('features list'),
        name: Joi.string().required().default('Auto Cad'),
        start_date: Joi.string().default('12/22/2020'),
        course_price: Joi.string().required().default('10000'),
        course_detail_link: Joi.string().required().default('https://link'),
        image_url: Joi.string().required().default('http://image_url'),
    })
}

module.exports = {
    createTrainingValidation
}