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

const getAllRestaurants = async (req, res) => {
    try {
        const allRestaurants = await Restaurant.find({});
        res.status(200).json(allRestaurants);
    } catch (err) {
        res.status(400).json({msg: err})
    }
}

const deleteRestaurantById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({msg: 'No restaurant with this id'})
        }
        const restaurant = await Restaurant.findOneAndDelete({_id: id});
        res.status(200).json({msg: 'Restaurant successfully deleted'})
    } catch (err) {
        res.status(400).json({error: err})
    }
}

module.exports = {
    createRestaurant,
    getAllRestaurants,
    deleteRestaurantById
}