import { Router } from "express"
import { isLoggedIn } from "../middleware/middleware.js"
import * as dreamcarsCtrl from '../controllers/dreamcars.js'

const router = Router()

//GET localhost:3000/dreamcars/new
router.get('/new', isLoggedIn, dreamcarsCtrl.new)

//GET localhost:3000/cars/:id
router.get('/:id', dreamcarsCtrl.show)

//POST localhost:3000/dreamcars
router.post('/',isLoggedIn, dreamcarsCtrl.create)

export {
    router
}