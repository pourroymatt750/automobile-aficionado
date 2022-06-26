import { Car } from "../models/car.js"

function index(req, res) {
    Car.find({})
    .then(cars => {
        res.render('cars/index', {
            title: 'Car Collection',
            cars
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/')
    })
}

function newCar(req, res) {
    
}

export {
    index,
    newCar as new
}