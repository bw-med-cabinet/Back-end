const router = require('express').Router()
//const Users = require('../users/users-model')
//const Ailments = require('../ailments/ailments-model')
//const Recc = require('./recc-model')
//const Strains = require('../strains')
const restricted = require('../auth/restricted-model')


router.use(restricted)

router.get('/', (req,res)=>{

})

router.get('/:id', (req, res)=>{

})

router.post('/', (req,res)=>{

})

router.put('/:id', (req, res)=>{

})

router.delete('/id',(req, res)=>{

})