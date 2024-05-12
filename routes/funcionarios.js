import express from 'express'
import {  postAddFuncionario, getListarFuncionario, deleteFuncionario, putEditarFuncionario} from '../controlllers/funcionarios.js'
const router = express.Router()

router.post('/funcionario', postAddFuncionario)
router.get('/funcionarios', getListarFuncionario)
router.delete('/funcionario/:matricula', deleteFuncionario)
router.put('/funcionario/:matricula', putEditarFuncionario)


export default router