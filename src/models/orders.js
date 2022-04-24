const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    // username: { type: String, required: true, unique: true },
    feature: { type: String },
    plan: { type: String },
    price: { type: String },
    name: { type: String },
    phone: { type: String },
    location: { type: String },
    tracking: { type: String },
    status: { type: String },


    date:{ type: String },
    
}, {
    timestamps: true,
});

const Orders = mongoose.model('Orders', OrdersSchema);

module.exports = Orders;

