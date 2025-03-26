const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const SlotSchema = new Schema({
    restaurantId: {
        type: String,
        ref: 'Restaurant',
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    slots: [
        {
            time: {
                type: String,
                required: true,
            },
            available: {
                type: Boolean,
                default: true,
            }
        }
    ],
})

module.exports = mongoose.model('Slots', SlotSchema);