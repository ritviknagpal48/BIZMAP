const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mapSchema = mongoose.Schema({
  name: {
    type: String
  },
  latitude: {
    type: String
  },
  longitude: {
    type: String
  },
  description: {
    type: String
  },
  verified: {
    type: Boolean,
    default: false
  },
  contact: {
    type: String
  },
  email: { type: String },
  data: {
    type: String,
    default: Date.now()
  }
});
module.exports = mongoose.model('Map', mapSchema);
