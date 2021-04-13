/*
var dotenv = require('dotenv');
dotenv.config();
Esto es equivalente
require('dotenv').config();
npx standard --fix
*/
require('dotenv').config()
const app = require('./app')
const { appConfig, dbConfig } = require('./config')

const conexionDB = require('./db/mongoDB.js')

async function initApp (appConfig, dbConfig) {
  try {
    await conexionDB(dbConfig)
    app.listen(appConfig.port, () => { console.log(`Server run in http://localhost:${appConfig.port}`) })
  } catch (error) {
    console.log(error)
    process.exit(0)
  }
}
initApp(appConfig, dbConfig)
