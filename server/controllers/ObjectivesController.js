const { Objective } = require('../models');

const ObjectivesController = {
  async index(req, res){
    let param = req.query.type
    let query={};
    if(param){
      query.type=param;
    }
  	const objectives = await Objective.find(query).populate('endPoints');
  	res.send(objectives);
  },
  async store(req, res){ 
    var newOjective = new Objective(req.body);
    await newOjective.save();
    res.send(newOjective);
  },
  async show(req, res){
  	const objective = await Objective.findById(req.params.id).populate('endPoints');
  	res.send(objective);
  },
  async update(req, res){

  },
  async remove(req, res){

  }
};

module.exports = ObjectivesController;