const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumSchema = mongoose.Schema({
  content: {
    type: String
  },
  Date: {
    type: String,
    default: Date.now()
  }
});
module.exports = mongoose.model('Forum', forumSchema);
