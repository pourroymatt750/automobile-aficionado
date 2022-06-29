import { Dreamcar } from "../models/dreamcar.js"

function newDreamcar(req, res) {
    Dreamcar.find({})
    .then(dreamcars => {
        res.render('dreamcars/new', {
            title: 'Add Your Dream Car',
            dreamcars
        })
    })
}

function create(req, res) {
    req.body.owner = req.user.profile._id
    Dreamcar.create(req.body)
    .then(dreamcar => {
        console.log('Creat DREAMCAR:',dreamcar)
        res.redirect('/cars')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/cars')
    })
}

function show(req, res) {
    Dreamcar.findById(req.params.id)
    .populate('owner')
    .then(dreamcar => {
        res.render('dreamcars/show', {
            title: 'Dream Car Details',
            dreamcar
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/cars')
    })
}

function edit(req, res) {
    Dreamcar.findById(req.params.id)
    .then(dreamcar => {
        res.render('dreamcars/edit', {
            title: "Edit Your Dream Car",
            dreamcar
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/cars')
    })
}

function deleteDreamCar(req, res) {
    Dreamcar.findById(req.params.id)
    .then(dreamcar => {
        if (dreamcar.owner.equals(req.user.profile._id)) {
            dreamcar.delete()
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

function createReview(req, res) {
    Dreamcar.findById(req.params.id)
    .then(dreamcar => {
        dreamcar.reviews.push(req.body)
        dreamcar.save()
        .then(() => {
            res.redirect(`/dreamcars/${dreamcar._id}`)
        })
    })
}

export {
    newDreamcar as new,
    create,
    show,
    edit,
    deleteDreamCar as delete,
    createReview 
}