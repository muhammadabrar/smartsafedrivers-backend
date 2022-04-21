const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FeedbacksSchema = new Schema({
    // username: { type: String, required: true, unique: true },
    
    job: { type: String },

    name: { type: String },
    msg: { type: String },
    date:{ type: String },
    
}, {
    timestamps: true,
});

const Feedbacks = mongoose.model('Feedbacks', FeedbacksSchema);

module.exports = Feedbacks;