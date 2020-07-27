const Joi = require('joi');

const createBuildingValidation = {
    payload: Joi.object({
        area: Joi.string().required().default('200x200x200'),
        description: Joi.string().required().default('description'),
        pricing: Joi.number().required().default(200),
        location: Joi.string().required().default('location'),
        image_url: Joi.string().required().default('https://{image_url}'),
        type: Joi.string().required().default('plan')
    })
}

const getBuildingByIdValidation = {
    params: {
        id: Joi.string()
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