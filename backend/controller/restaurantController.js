const Restaurant = require('../models/restaurants');
const mongoose = require('mongoose');

const createRestaurant = async (req, res) => {
    const {name, address, phone, url, cuisine, availableTimings} = req.body;
    console.log('hello', req.body);
    try {
        const restaurant = Restaurant.create({name, address, phone, url, cuisine, availableTimings});
        res.status(200).json(restaurant)
    } catch (err) {
        res.status(400).json({msg: err})
    }
}

module.exports = {
    createRestaurant,
}