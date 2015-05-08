var mongoose = require('mongoose');

// Create the AttractionSchema
var AttractionSchema = new mongoose.Schema({
  created: { type: Date, default: Date.now },
  description: { type: String, default: '', trim: true },
  imageUrl: { type: String, default: '' },
  locationLat: { type: Number, required: true },
  locationLng: { type: Number, required: true },
  title: { type: String, required: true, trim: true },
});

// Export the model schema
module.exports = AttractionSchema;
