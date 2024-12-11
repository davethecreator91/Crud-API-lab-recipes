const mongoose = require('mongoose');

const pantrySchema = mongoose.Schema({
    name: String,
    expDate: Number,
    Qty: Number
});

const pantryModel = mongoose.model('pantryModel', pantrySchema);

module.exports = pantryModel;