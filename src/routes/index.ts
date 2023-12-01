import { response, Router } from "express";
import {Request, Response} from 'express'
import { Produto } from "../models/Produto";
import * as produtoControllers from '../controllers/produtoControllers'

const router = Router()

router.get('/',(req:Request ,res:Response) =>{
    res.send("TESTANDO!!")
})

//chamando o produto
router.get('/produtos', produtoControllers.index)

//chamando visualizar opagina
router.get('/cadastro', produtoControllers.visualizaPaginaCadastro)

//chamando cadastar o produto 
router.post('/cadastro',produtoControllers.cadastroProduto)

//chamando o editaproduto 
router.get('/editar/:id',produtoControllers.editaProduto)
router.post('/editar/:id',produtoControllers.atualizaProduto)

//deletar o produto
router.get('/excluir/:id',produtoControllers.deleteProduto)

export default router 