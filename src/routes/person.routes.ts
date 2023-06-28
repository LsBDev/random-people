import {Router} from "express"
import { getPerson } from "../controllers/person.controller"

const router = Router()

router.get("/person", getPerson)

export default router