import { Funcionarios } from '../models/Funcionarios.js'

//requisição para cadastrar funcionário
const postAddFuncionario = async (req, res) => {
    try {
        const { nome, idade, sexo } = req.body
        if (!nome || !idade || !sexo) return res.status(404).send({ mensagem: 'informações incompletas, revise o cadastro!' })
        const funcionarioCriado = await Funcionarios.create({ nome, idade, sexo })
        res.status(201).send({ funcionarioCriado })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'erro ao cadastrar um funcionário(a).' })
    }
}

//requisição para listar funcionário
const getListarFuncionario = async (req, res) => {
    try {
        const funcionarios = await Funcionarios.findAll()
        res.status(200).send({ funcionarios })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'erro ao buscar dados!' })
    }
}

//requisição para editar as informações de um funcionário
const putEditarFuncionario = async (req, res) => {
    try {
        const { matricula } = req.params
        const { nome, idade, sexo } = req.body
        await Funcionarios.update({ nome, idade, sexo }, { where: { matricula } })
        res.status(200).send({ mensagem: 'funcionário atualizado com sucesso!' })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'erro ao atualizar o registro!' })
    }
}

//requisição para excluir um funcionário
const deleteFuncionario = async (req, res) => {
    try {
        const { matricula } = req.params
        await Funcionarios.destroy({ where: { matricula } })
        res.status(200).send({ mensagem: 'funcionário excluído com sucesso!' })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'erro ao deletar funcionário!' })
    }
}

export { postAddFuncionario, getListarFuncionario, deleteFuncionario, putEditarFuncionario}