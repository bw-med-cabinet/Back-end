const router = require('express').Router()

const Users = require('./users-model')
const restricted = require('../auth/authenticate-middleware')

router.use(restricted)

router.get('/', (req, res)=>{
    Users.find()
        .then(users =>{
            res.status(200).json({users, jwt: req.jwt})
        })
        .catch(err =>{
            res.status(403).json(err, {message: 'you cant enter'})
        })
})

router.get('/:id',(req, res)=>{
    
})

module.exports = router;