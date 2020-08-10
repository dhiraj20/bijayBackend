const training = require('../factory/training.factory'),
    trainingValidation = require('../validations/training_validation');

const getTraining = {
    description: 'Get a training details',
    auth: false,
    handler: (request, h) => training.getTraining(request, h),
    tags: ['api', 'TRAINING']
}

const createTraining = {
    description: 'Create a training',
    auth: false,
    handler: (request, h) => training.createTraining(request, h),
    tags: ['api', 'TRAINING'],
    plugins: {
        'hapi-swagger': {
            payloadType: 'json'
        }
    },
    validate: trainingValidation.createTrainingValidation
}


module.exports = {
    getTraining,
    createTraining
}