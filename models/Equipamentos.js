import sequelize from "../database.js"
import { DataTypes } from "sequelize"

const Equipamentos = sequelize.define('Equipamento', {
    codigoepi: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    equipamento: {
        type: DataTypes.STRING,

    },
    tamanho: {
        type: DataTypes.STRING,
    },
    validade: {
        type: DataTypes.DATEONLY,
    },
    cor: {
        type: DataTypes.STRING,
    },

    quantidade: {
        type: DataTypes.INTEGER,
    },


})

export { Equipamentos }