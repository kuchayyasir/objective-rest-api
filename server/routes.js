const express = require('express'),
	path = require('path'),
	rootPath = path.normalize(__dirname + '/../'),
	router = express.Router(),
	{ ObjectivesController,HomeController,EndPointsController,AssessmentsController } = require('./controllers');

module.exports = function (app) {
	router.get('/', HomeController.index);
	router.get('/objective', ObjectivesController.index);
	router.post('/objective', ObjectivesController.store);
	router.get('/objective/:id', ObjectivesController.show);
	router.put('/objective/:id', ObjectivesController.update);
	router.delete('/objective/:id', ObjectivesController.remove);
	router.get('/endpoint', EndPointsController.index);
	router.post('/endpoint/:objectiveId', EndPointsController.store);
	router.get('/endpoint/:id', EndPointsController.show);
	router.put('/endpoint/:id', EndPointsController.update);
	router.delete('/endpoint/:id', EndPointsController.remove);
	router.get('/assessment', AssessmentsController.index);
	router.post('/assessment', AssessmentsController.store);
	router.get('/assessment/:id', AssessmentsController.show);
	router.put('/assessment/:id', AssessmentsController.update);
	router.delete('/assessment/:id', AssessmentsController.remove);

	app.use('/api', router);
};