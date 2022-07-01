import { Router } from "express"
import { isLoggedIn } from "../middleware/middleware.js"
import * as dreamcarsCtrl from '../controllers/dreamcars.js'

const router = Router()

//GET localhost:3000/dreamcars/new
router.get('/new', isLoggedIn, dreamcarsCtrl.new)

//GET localhost:3000/dreamcars/:id
router.get('/:id', dreamcarsCtrl.show)

//GET localhost:3000/dreamcars/:id/edit
router.get('/:id/edit', isLoggedIn, dreamcarsCtrl.edit)

//POST localhost:3000/dreamcars
router.post('/',isLoggedIn, dreamcarsCtrl.create)

//POST localhost:3000/:id/reviews
router.post('/:id/reviews',isLoggedIn, dreamcarsCtrl.createReview)

//PUT localhost:3000/dreamcars/:id
router.put('/:id', isLoggedIn, dreamcarsCtrl.update)

//DELETE localhost:3000/dreamcars/:id
router.delete('/:id', isLoggedIn, dreamcarsCtrl.delete)

export {
    router
}