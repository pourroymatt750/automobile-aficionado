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

export {
    newDreamcar as new,
    create
}