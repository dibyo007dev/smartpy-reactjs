const mongoose = require('mongoose');
const schema = mongoose.schema;

// Create Schema
const ItemSchema = new schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item',ItemSchema);  