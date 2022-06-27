import { Router } from 'express'
import { isLoggedIn } from "../middleware/middleware.js"
import * as carsCtrl from "../controllers/cars.js"

const router = Router()

//GET localhost:3000/cars
router.get('/', carsCtrl.index)

//GET locahost:3000/cars/new
router.get('/new',isLoggedIn, carsCtrl.new)

//POST localhost:3000/cars
router.post('/', isLoggedIn, carsCtrl.create)

//GET localhost:3000/car/:id
router.get('/:id', carsCtrl.show)

//POST localhost:3000/:id/reviews
router.post('/:id/reviews',isLoggedIn, carsCtrl.createReview)

export {
    router
}