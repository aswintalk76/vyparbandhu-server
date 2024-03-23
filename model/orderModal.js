const { json } = require('body-parser');
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userData: {
        type: Object,
    },
    package: {
        type: Object
    },
    status: {
        type: String,

    },
});

const OrderDataModal = mongoose.model('orderData', orderSchema);

module.exports = OrderDataModal;