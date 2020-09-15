const mongoose = require('mongoose');

const endPointModel = mongoose.Schema({
  name: { 
  	type: String, 
  	required: '{PATH} is required!'
  },
  objective: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Objective' 
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('EndPoint', endPointModel);