import { Router } from 'express'
import { isLoggedIn } from "../middleware/middleware.js"
import * as carsCtrl from "../controllers/cars.js"

const router = Router()

//GET localhost:3000/cars
router.get('/', carsCtrl.index)

//GET locahost:3000/cars/new
router.get('/new',isLoggedIn, carsCtrl.new)

export {
    router
}