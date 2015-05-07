var mongoose = require('mongoose');

// Create the AttractionSchema
var AttractionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
});

// Export the model schema
module.exports = AttractionSchema;
