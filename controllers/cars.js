import { Car } from "../models/car.js"
import { Dreamcar } from "../models/dreamcar.js"

function index(req, res) {
    Car.find({})
    .populate('owner')
    .then(cars => {
        Dreamcar.find({})
        .populate('owner')
        .then(dreamcars => {
            res.render('cars/index', {
                title: 'Car Collection',
                cars, 
                dreamcars
            })
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/')
    })
}

function newCar(req, res) {
    res.render('cars/new', {
        title: 'Add Car',
    })
}

function create(req, res) {
    req.body.owner = req.user.profile._id
    Car.create(req.body)
    .then(car => {
        res.redirect('/cars')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/cars')
    })
}

function show(req, res) {
    Car.findById(req.params.id)
    .populate('owner')
    .then(car => {
        res.render('cars/show', {
            title: 'Car Details',
            car
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/cars')
    })
}

function createReview(req, res) {
    Car.findById(req.params.id)
    .then(car => {
        car.reviews.push(req.body)
        car.save()
        .then(() => {
            res.redirect(`/cars/${car._id}`)
        })
    })
}

function edit(req, res) {
    Car.findById(req.params.id)
    .then(car => {
        res.render('cars/edit', {
            title: "Edit Car",
            car
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/cars')
    })
}

function update(req, res) {
    Car.findById(req.params.id)
    .then(car => {
        if (car.owner.equals(req.user.profile._id)) {
            car.updateOne(req.body, {new:true})
            .then(() => {
                res.redirect(`/cars/${car._id}`)
            })
        } else {
            throw new Error ('Not Authorized')
        }
    })
    .catch(err => {
        console.log(err)
        res.redirect('/cars')
    })
}

function deleteCar(req, res) {
    Car.findById(req.params.id)
    .then(car => {
        if (car.owner.equals(req.user.profile._id)) {
            car.delete()
            .then(() => {
                res.redirect('/cars')
            })
        } else {
            throw new Error ('Not Authorized')
        }
    })
    .catch(err => {
        console.log(err)
        res.redirect('/cars')
    })
}

export {
    index,
    newCar as new,
    create,
    show,
    createReview,
    edit,
    update,
    deleteCar as delete
}