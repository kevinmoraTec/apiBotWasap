
const express = require('express')
const router = express.Router()


// const validatorHanlder = require('../middleware/validator.handler')

// const {createUserShema} = require('../schemas/user.schema')


router.get('/',async (req,res)=>{

    console.log('okey');
    res.json('okey')

})



module.exports = router
