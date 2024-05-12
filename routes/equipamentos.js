import express from 'express'
import { postAddEquipamento, getListarEquipamento, putEditarEquipamento, deleteEquipamento } from '../controlllers/equipamentos.js'
const router = express.Router()

router.post('/equipamento', postAddEquipamento)
router.get('/equipamentos', getListarEquipamento)
router.put('/equipamento/:codigoepi', putEditarEquipamento)
router.delete('/equipamento/:codigoepi', deleteEquipamento)

export default router 