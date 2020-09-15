const { Assessment } = require('../models');

const AssessmentsController = {
  async index(req, res){
  	const objectives = await Assessment.find();
  	res.send(objectives);
  },
  async store(req, res){
    
    var newAssessment = new Assessment(req.body);
    await newAssessment.save();
    res.send(newAssessment);
  },
  async show(req, res){
  	const assessment = await Assessment.findById(req.params.id);
  	res.send(assessment);
  },
  async update(req, res){

  },
  async remove(req, res){

  }
};

module.exports = AssessmentsController;