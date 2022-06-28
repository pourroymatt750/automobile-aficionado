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

export {
    newDreamcar as new
}