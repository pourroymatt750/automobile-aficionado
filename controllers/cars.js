import { Car } from "../models/car.js"

function index(req, res) {
    Car.find({})
    .populate('owner')
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
        console.log(car)
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

export {
    index,
    newCar as new,
    create,
    show,
    createReview,
    edit
}