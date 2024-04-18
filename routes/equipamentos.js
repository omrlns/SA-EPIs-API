import express from 'express'
import { postAddEquipamento, getListarEquipamento, putEditarEquipamento, deleteEquipamento } from '../controlllers/equipamentos.js'
const router = express.Router()

router.post('/equipamentos', postAddEquipamento)
router.get('/equipamentos', getListarEquipamento)
router.put('/equipamentos/:codigoepi', putEditarEquipamento)
router.delete('/equipamentos/:codigoepi', deleteEquipamento)

export default router 