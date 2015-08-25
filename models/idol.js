var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var idolSchema = new Schema({
  name: {
    required: true,
    type: String,
    trim: true
  },
  // englishName: {
  //   required: false,
  //   type: String,
  //   trim: true
  // },
  // sex: {
  //   required: false,
  //   type: String,
  //   trim: true,
  //   default: "female"
  // },
  height: {
    required: false,
    type: Number
  },
  weight: {
    required: false,
    type: Number
  },
  group: {
    required: true,
    type: String,
    trim: true,
    default: "solo"
  },
  imageLink: {
    required: false,
    type: String,
    trim: true,
    max: 200
  },
  birthDate: {
    required: false,
    type: Date
  },
  updateDate: {
    required: true,
    type: Date,
    default: Date.now
  }
});

// methods ======================
idolSchema.methods.generateHash = function(password) {
    return ;
};

idolSchema.methods.validPassword = function(password) {
    return ;
};

module.exports = mongoose.model('Idol', idolSchema);
