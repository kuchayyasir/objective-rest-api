const { EndPoint, Objective } = require('../models');

module.exports = {
	async index(req, res) {
		const endPoints = await EndPoint.find();
		res.send(endPoints);
	},
	async store(req, res) {
		let names=req.body.names;
		const objective = await Objective.findById(req.params.objectiveId);
		let endPoints=[];
		for (const name of names) {
			let endPointDocument = {
				'name': name,
				'objective': req.params.objectiveId
			}
			let newEndPoint = new EndPoint(endPointDocument);
			await newEndPoint.save();
			objective.endPoints.push(newEndPoint);	
			endPoints.push(newEndPoint);	
		}
		await objective.save();
		res.send(endPoints);
	},
	async show(req, res) {
		const endPoint = await EndPoint.findById(req.params.id);
		res.send(endPoint);
	},
	async update(req, res) {

	},
	async remove(req, res) {

	}

};