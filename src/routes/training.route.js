const trainingController = require('../controller/training.controller');

module.exports = [
    { method: 'GET', path: '/training', options: trainingController.getTraining },
    { method: 'POST', path: '/training', options: trainingController.createTraining },
]
