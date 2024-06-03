import { body, param } from "express-validator"

export const FotoValidator = [
    body('titulo').isString().withMessage('Titulo é Obrigatório'),
    body('url').isString().withMessage('URL é Obrigatório'),
    body('produtoId').isString().withMessage('ID Produto é Obrigatório')
]

export const FotoUpdateValidator = [
    param('id').isInt().withMessage('ID é Obrigatório'),
    body('titulo').isString().withMessage('Titulo é Obrigatório'),
    body('url').isString().withMessage('URL é Obrigatório'),
    body('produtoId').isString().withMessage('ID Produto é Obrigatório')
]

export const FotoIdValidator     = [
    param('id').isInt().withMessage('ID é Obrigatório'),
]

