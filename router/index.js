const express = require('express')
const router = express.Router()
const userRouter = require('./user.router')
const botWathsap = require('./botWatsap.router')
const planesRouter = require('./planes.router')
const interaccionesRouter = require('./interacciones.router')


function routerApi(app){
    app.use('/guguabot/v1',router)
    router.use('/users',userRouter)
    router.use('/bot',botWathsap)
    router.use('/planes',planesRouter)
    router.use('/iteracciones',interaccionesRouter)
}


module.exports = routerApi;
