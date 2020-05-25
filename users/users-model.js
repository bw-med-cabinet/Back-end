const db = require('../database/dbConfig')

module.exports={
    find,
    add,
    findBy,
}

function find(){
    return db('users')
}

function add(user){
    return db('users').insert(user)
}

function findBy(filter){
    console.log(filter)
    return db('users').where('users.username', filter.username)
}