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

export {
    router
}