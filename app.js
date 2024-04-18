import express from 'express'
import 'dotenv/config'
import routerFuncionarios from './routes/funcionarios.js'
import routerEquipamentos from './routes/equipamentos.js'

// import sequelize from './database.js'

const app = express()

// try {
//     await sequelize.sync()
// } catch (erro) {
//     console.log(erro)
// }

app.use(express.json())
app.use(routerFuncionarios)
app.use(routerEquipamentos)


app.listen(3000, () => console.log('sistema online!'))