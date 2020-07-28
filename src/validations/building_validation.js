const Joi = require('joi');

const createBuildingValidation = {
    payload: Joi.object({
        name: Joi.string().required().default('Name'),
        area: Joi.string().required().default('300 sq.ft'),
        size: Joi.string().required().default('200x200x200'),
        facing: Joi.string().required().default('East'),
        pricing: Joi.number().required().default(200),
        description: Joi.string().required().default('description'),
        location: Joi.string().required().default('location'),
        image_url: Joi.string().required().default('https://{image_url}'),
        type: Joi.string().required().default('plan')
    })
}

const getBuildingByIdValidation = {
    params: {
        id: Joi.string(),
    }
}

const getBuildingByTypeValidation = {
    params: {
        type: Joi.string()
    }
}

module.exports = {
    createBuildingValidation,
    getBuildingByIdValidation,
    getBuildingByTypeValidation
}