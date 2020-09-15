require('./index');
const mongoose = require('mongoose');
const { Objective, EndPoint,Assessment } = require('../server/models');

async function seedObjectives() {
  console.log('Seeding objectives to ' + mongoose.connection.name + '...');
  const objectives = [
    { name: 'Objective#1', type: 'primary' },
    { name: 'Objective#2', type: 'primary' },
    { name: 'Objective#3', type: 'primary' },
    { name: 'Objective#4', type: 'primary' },
    { name: 'Objective#5', type: 'primary' },
  ];

  for (objective of objectives) {
    var newObjective = new Objective(objective);
    await newObjective.save();
  }

  const a = await Objective.find();
  console.log('objectives: ', a);
}

async function seedEndpoints() {
  console.log('Seeding endpoints to ' + mongoose.connection.name + '...');

  const objective1 = await Objective.findOne({ name: 'Objective#1' });
  const objective2 = await Objective.findOne({ name: 'Objective#2' });
  const objective3 = await Objective.findOne({ name: 'Objective#3' });
  const objective4 = await Objective.findOne({ name: 'Objective#4' });
  const objective5 = await Objective.findOne({ name: 'Objective#5' });

  let endPoint1 = new EndPoint({ name: 'EndPoint#1', objective: objective1._id });
  let endPoint2 = new EndPoint({ name: 'EndPoint#2', objective: objective2._id });
  let endPoint3 = new EndPoint({ name: 'EndPoint#3', objective: objective3._id });
  let endPoint4 = new EndPoint({ name: 'EndPoint#4', objective: objective4._id });
  let endPoint5 = new EndPoint({ name: 'EndPoint#5', objective: objective5._id });

  await endPoint1.save();
  await endPoint2.save();
  await endPoint3.save();
  await endPoint4.save();
  await endPoint5.save();

  objective1.endPoints.push(endPoint1);
  objective2.endPoints.push(endPoint2);
  objective3.endPoints.push(endPoint3);
  objective4.endPoints.push(endPoint4);
  objective5.endPoints.push(endPoint5);

  await objective1.save();
  await objective2.save();
  await objective3.save();
  await objective4.save();
  await objective5.save();
  const a = await EndPoint.find();
  console.log('Endpoints: ', a);
}
async function seedAssessments(){
  console.log('Seeding Assessments to ' + mongoose.connection.name + '...');
  const assessments = [
    { name: 'Assessment#1'  },
    { name: 'Assessment#2' },
    { name: 'Assessment#3'  },
    { name: 'Assessment#4'  },
    { name: 'Assessment#5' }
  ];

  for (assessment of assessments) {
    var newAssessment = new Assessment(assessment);
    await newAssessment.save();
  }

  const a = await Assessment.find();
  console.log('Assessment: ', a);
}
seedObjectives();
seedEndpoints();
seedAssessments();

