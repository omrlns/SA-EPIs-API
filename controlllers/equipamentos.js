import { Equipamentos } from '../models/Equipamentos.js'

//requisição para cadastrar equipamento
const postAddEquipamento = async (req, res) => {
    try {
        const { equipamento, tamanho, validade, cor, quantidade } = req.body
        if (!equipamento || !tamanho || !validade || !cor || !quantidade ) return res.status(404).send({ mensagem: 'informações incompletas, revise o cadastro!' })
        const equipamentoCriado = await Equipamentos.create({ equipamento, tamanho, validade, cor, quantidade })
        res.status(201).send({ equipamentoCriado })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'erro ao cadastrar um equipamento!' })
    }
}

//requisição para listar equipamento
const getListarEquipamento = async (req, res) => {
    try {
        const equipamentos = await Equipamentos.findAll()
        res.status(200).send({ equipamentos })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'erro ao buscar dados!' })
    }
}

//requisição para editar as informações de um equipamento
const putEditarEquipamento = async (req, res) => {
    try {
        const { codigoepi } = req.params
        const { equipamento, tamanho, validade, cor, quantidade} = req.body
        await Equipamentos.update({ equipamento, tamanho, validade, cor, quantidade }, { where: { codigoepi } })
        res.status(200).send({ mensagem: 'equipamento atualizado com sucesso!' })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'erro ao atualizar equipamento!' })
    }
}

//requisição para excluir um equipamento
const deleteEquipamento = async (req, res) => {
    try {
        const { codigoepi } = req.params
        await Equipamentos.destroy({ where: { codigoepi } })
        res.status(200).send({ mensagem: 'equipamento excluído com sucesso!' })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'erro ao deletar equipamento!' })
    }
}

export { postAddEquipamento, getListarEquipamento, putEditarEquipamento, deleteEquipamento }