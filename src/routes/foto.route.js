import { Router } from "express"
import { FotoIdValidator, FotoUpdateValidator, FotoValidator } from "../validators/foto.validator.js"
import FotoController from "../controllers/foto.controller.js"

const router = Router()

router.get('/', FotoController.index)
router.get('/:id', FotoValidator, FotoController.show)
router.post('/', FotoValidator, FotoController.create)
router.put('/:id', FotoUpdateValidator, FotoController.update)
router.delete('/:id', FotoIdValidator, FotoController.delete)

export default router