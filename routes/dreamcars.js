import { Router } from "express"
import { isLoggedIn } from "../middleware/middleware.js"
import * as dreamcarsCtrl from '../controllers/dreamcars.js'

const router = Router()

router.get('/new', isLoggedIn, dreamcarsCtrl.new)

export {
    router
}