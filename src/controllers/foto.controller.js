import { validationResult } from "express-validator"
import Foto from "../models/fotos.model.js"

export default class FotoController {
    static async index(req, res) {
        const fotos = await Foto.findMany()
        res.json(fotos)
    }

    static async create(req, res) {
        const erros = validationResult(req)
        if (!erros.isEmpty()) {
            return res.status(400).json({erros: erros.array()})
        }
        const fotos = await Foto.create({
            data: req.body
        })
        res.json(fotos)
    }

    static async show(req, res) {
        const erros = validationResult(req)
        if (!erros.isEmpty()) {
            return res.status(400).json({erros: erros.array()})
        }

        const produto = await Foto.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if(!produto) {
            return res.status(404).json({ message: "Foto Não encontrado!"})
        }

        res.json(produto)
    }

    static async update(req, res) {
        const erros = validationResult(req)
        if (!erros.isEmpty()) {
            return res.status(400).json({erros: erros.array()})
        }

        const produto = await Foto.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })

        if(!produto) {
            return res.status(404).json({ message: "Foto Não encontrado!"})
        }
        const updatedProduto = await Foto.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })
        
        res.json(updatedProduto)
    }

    static async delete(req, res) {
        const erros = validationResult(req)
        if (!erros.isEmpty()) {
            return res.status(400).json({erros: erros.array()})
        }
        
        const produto = await Foto.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })

        if(!produto) {
            return res.status(404).json({ message: "Foto Não encontrado!"})
        }

        await Foto.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })

        res.status(200).json({ message: 'Foto deletado com sucesso!' })
    }
}