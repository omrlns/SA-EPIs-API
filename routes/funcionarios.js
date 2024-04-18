import express from 'express'
import {  postAddFuncionario, getListarFuncionario, deleteFuncionario, putEditarFuncionario} from '../controlllers/funcionarios.js'
const router = express.Router()

router.post('/funcionarios', postAddFuncionario)
router.get('/funcionarios', getListarFuncionario)
router.delete('/funcionarios/:matricula', deleteFuncionario)
router.put('/funcionarios/:matricula', putEditarFuncionario)


export default router