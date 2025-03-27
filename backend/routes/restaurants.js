
const express = require('express')
const { createRestaurant, getAllRestaurants, deleteRestaurantById } = require('../controller/restaurantController')

const router = express.Router()


// GET all restaurant
router.get('/', getAllRestaurants)

//GET a single restaurant
// router.get('/:id', getRestaurantById)

//POST a new restaurant
router.post('/', createRestaurant)

//Delete a restaurant
router.delete('/:id', deleteRestaurantById)

//Update a restaurant
// router.patch('/:id', updateRestaurantById)

//exporting the routes
module.exports = router