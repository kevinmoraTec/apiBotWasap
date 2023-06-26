const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const { config } = require('./config/config')
const port = config.port
//const whitheList = ['http://localhost:5500','https://myapp.com']
const {logError,errorHandler,boomErrorHandler} = require('./middleware/error.handler')


app.use(express.json()) // Hbilitamos este midleware para poder recibir y responder mediante jsons

// const options = {
//     origin:(origin,callback)=>{
//         if (whitheList.includes(origin)) {
//             callback(null,true)
//         }else{
//             callback(new Error('no Perimtido'))
//         }
//     }
// }

app.use(cors())
const routerApi = require('./router') // no colocamos index porque ya se llame automaticamennte cuando existe el idex


app.use(morgan('short')) // UN LOG DE SOLICITUDES
routerApi(app)

// Los middlewars de tipo error se deben ocupar despues del Routing
// De acuerdo a como se los ponga se van a ir ejecutando
app.use(logError)
app.use(boomErrorHandler)
app.use(errorHandler)


app.listen(port,()=>{
    console.log('Escuchando !! '+port);
})

