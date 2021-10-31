const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Scales = new Schema({
  product_name: String,
  type: String,
  status: String,
  manufacture: String,
  model: String,
  responsible_division: String,
  operational_division: String,
  mol: String,
  territory: String,
  serial_number: String,
  guid: String,
  bims: String,
  tam: String,
});

module.exports = mongoose.model('Scales', Scales);
