import { Router } from "express"
import ProdutoRouter from "./produto.route.js"
import FotoRouter  from "./foto.route.js"

const router = Router()

router.use('/produtos', ProdutoRouter)
router.use('/fotos', FotoRouter)


export default router