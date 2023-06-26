const boom = require('@hapi/boom')

function validatorHanlder(shema,property) { // le quitamos el err porque no es un midlewar de error
// utilizamos una clusoure
return (req,res,next)=>{
    const data = req[property] // (req[property]) hace referencia a que puede venir por (req.params,req,query,req.body)
     const {error} = shema.validate(data,{abortEarly:false})
     if (error) {
        next(boom.badRequest(error))
     }
     next()
}
}


module.exports = validatorHanlder;
