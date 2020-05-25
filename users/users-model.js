const db = require('../database/dbConfig')

module.exports={
    find,
    add,
    findBy,
    getUsersAilments,
    addAilment,
    deleteUsersAilment,
    updateUsersAilment
}

function find(){
    return db('users')
}

function add(user){
    return db('users').insert(user, 'id')
    .then(ids =>{
        return findBy(ids[0])
    })
}

function findBy(id){
    console.log(id)
    return db('users').where({id})
}

function getUsersAilments(user_id){
    return db('ailments')
        .select( 'users.username', 'ailments.name', 'ailments.description','ailments.id')
        .join('users',  'ailments.user_id','users.id',)
        .where({user_id})
}

function addAilment (user_id){
    return db('ailments')
        .insert(user_id, 'id')
        .then(ids =>{
            return getUsersAilments(ids[0])
        })
}

function deleteUsersAilment(id){
    return db('ailments')
            .where('id', id)
            .del()
}

function updateUsersAilment(changes, id){
        return db('ailments')
                .where({id}).update(changes)
}