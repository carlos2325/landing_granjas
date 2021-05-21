import mongoose from 'mongoose'

const conectorDB = () => {

    mongoose.connection.on('connecting', _ => {
        console.log("Estoy conectando a la base de datos")
    })

    const db = mongoose.connection
    
     mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true,
        keepAliveInitialDelay: 300000
    })
    .catch( (err) => console.log(err))

   db.on('open', _ => {
       console.log("Conexion con exito a base de datos")
   })

   db.on('error', err => {
       console.log(err)
   })
}

export default conectorDB;


