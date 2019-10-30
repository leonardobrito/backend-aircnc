const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Spot', SpotSchema);
