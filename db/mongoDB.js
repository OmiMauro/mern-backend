const mongoose = require('mongoose')

mongoose.connection.on('open', () => { console.log('DB Conected') })

async function conexionDB({ host, port, dbName }) {
  const uri = `mongodb://${host}:${port}/${dbName}`
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = conexionDB
