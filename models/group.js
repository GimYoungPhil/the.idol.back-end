var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var groupSchema = new Schema({
  name: {
    required: true,
    type: String,
    trim: true
  },
  company: {
    required: false,
    type: String,
    trim: true
  },
  updateDate: {
    required: true,
    type: Date,
    default: Date.now
  }
});

// methods ======================
groupSchema.methods.generateHash = function(password) {
    return ;
};

groupSchema.methods.validPassword = function(password) {
    return ;
};

module.exports = mongoose.model('Group', groupSchema);
