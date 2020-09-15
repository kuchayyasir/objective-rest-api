const mongoose = require('mongoose');

const assessmentModel = mongoose.Schema({
  name: { 
  	type: String, 
  	required: '{PATH} is required!'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Assessment', assessmentModel);