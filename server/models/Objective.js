const mongoose = require('mongoose');

const objectiveModel = mongoose.Schema({
  name: { 
  	type: String, 
  	required: '{PATH} is required!'
  },
  type: {
    type: String,
    required: '{PATH} is required!'
  },
  endPoints: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'EndPoint' }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Objective', objectiveModel);