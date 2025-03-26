const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    url: {
        type: String,
    },
    cuisine: {
        type: String,
        required: true,
    },
    availableTimings: [
        {
            type: {
                type: String,
                required: true,
            },
            open: {
                type: String,
                required: true,
            },
            close: {
                type: String,
                required: true,
            },
            slots: [String]
        }
    ]
}, { timestamps: true })

module.exports = mongoose.model('Restaurant', restaurantSchema)