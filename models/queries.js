const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QueriesSchema = new Schema({
    // username: { type: String, required: true, unique: true },
    subject: { type: String },
    msg: { type: String },

    name: { type: String },
    phone: { type: String },
    date:{ type: String },
    
}, {
    timestamps: true,
});

const Queries = mongoose.model('Queries', QueriesSchema);

module.exports = Queries;