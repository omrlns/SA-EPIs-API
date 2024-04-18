import sequelize from "../database.js"
import { DataTypes } from "sequelize"

const Funcionarios = sequelize.define('Funcionario', {
    matricula: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING
    },
    idade: {
        type: DataTypes.INTEGER
    },
    sexo: {
        type: DataTypes.STRING
    },
})

export { Funcionarios }